"""Validate final PDFs and render all pages for human inspection (PyMuPDF)."""
import sys, json
from pathlib import Path
sys.path.insert(0,str(Path('artifacts/pdf-python').resolve()))
import pymupdf as fitz

root=Path('public/promo/pdf'); out=Path('artifacts/promo-qa/pdf-render'); out.mkdir(parents=True,exist_ok=True)
manifest=json.loads(Path('public/promo/manifest.json').read_text(encoding='utf8'))
ids=[x['id'] for x in manifest['cards']]
for key in ids+['all-a5','all-a4']:
    doc=fitz.open(root/(key+'.pdf'))
    assert len(doc)==(len(ids) if key.startswith('all-') else 1),(key,len(doc))
    for index,page in enumerate(doc):
        width,height=(297,210) if key=='all-a4' else (148,210)
        assert abs(page.rect.width*25.4/72-width)<.5,(key,page.rect)
        assert abs(page.rect.height*25.4/72-height)<.5,(key,page.rect)
        text=page.get_text()
        bookid=ids[index] if key.startswith('all-') else key
        assert 'vipup.site/'+bookid in text,(key,index,'missing URL')
        assert '\ufffd' not in text,(key,index,'missing glyph')
        assert page.get_fonts(),key
        for block in page.get_text('dict')['blocks']:
            if block['type']!=0: continue
            for line in block['lines']:
                for span in line['spans']:
                    box=fitz.Rect(span['bbox'])
                    assert box.x0>=0 and box.y0>=0 and box.x1<=page.rect.width+.5 and box.y1<=page.rect.height+.5,(key,span)
        if not key.startswith('all-'):
            page.get_pixmap(matrix=fitz.Matrix(2,2)).save(out/(key+'.png'))
    doc.close()

# Contact sheets made from the actual PDF pages, not the source HTML screenshots.
source=fitz.open(root/'all-a5.pdf')
for start in range(0,len(ids),9):
    sheet=fitz.open(); p=sheet.new_page(width=1260,height=1800)
    for n,i in enumerate(range(start,min(start+9,len(ids)))):
        x=(n%3)*420;y=(n//3)*600
        # Raster contact thumbnails avoid cross-document variable-font grafting bugs.
        p.insert_image(fitz.Rect(x+8,y+8,x+412,y+580),stream=source[i].get_pixmap().tobytes('png'))
        p.insert_text((x+10,y+594),ids[i],fontsize=11)
    p.get_pixmap().save(out/('contact-'+str(start//9+1)+'.png'))
    sheet.close()
# A4 placement sample and last sheet.
doc=fitz.open(root/'all-a4.pdf')
for n in [0,len(doc)-1]:doc[n].get_pixmap(matrix=fitz.Matrix(1.2,1.2)).save(out/('a4-'+str(n)+'.png'))
print(f'PASS: {len(ids)+2} PDFs; A5/A4 dimensions, page counts, embedded fonts, text bounds, URLs. All A5 pages rendered.')
