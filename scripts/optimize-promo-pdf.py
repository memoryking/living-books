"""Compress photographic streams in PDF exports, retaining vector text and QR."""
from pathlib import Path
import sys, os
sys.path.insert(0,str(Path('artifacts/pdf-python').resolve()))
import pymupdf as fitz
for file in Path('public/promo/pdf').glob('*.pdf'):
    selected=os.environ.get('PROMO_IDS')
    if selected and file.stem not in selected.split(',')+['all-a5','all-a4']: continue
    doc=fitz.open(file)
    doc.rewrite_images(quality=90,bitonal=False,gray=False)
    temp=file.with_suffix('.optimized.pdf')
    doc.save(temp,garbage=4,deflate=True)
    doc.close()
    temp.replace(file)
    print(file.name,file.stat().st_size)
