"""Compress photographic streams in PDF exports, retaining vector text and QR."""
from pathlib import Path
import sys
sys.path.insert(0,str(Path('artifacts/pdf-python').resolve()))
import pymupdf as fitz
for file in Path('public/promo/pdf').glob('*.pdf'):
    doc=fitz.open(file)
    doc.rewrite_images(quality=90,bitonal=False,gray=False)
    temp=file.with_suffix('.optimized.pdf')
    doc.save(temp,garbage=4,deflate=True)
    doc.close()
    temp.replace(file)
    print(file.name,file.stat().st_size)
