import zipfile
import re
import os

docx_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\LTD portfolio\Master_Bible_Portfolio_2025-12-02.docx"
output_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\master_bible_text.txt"

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml').decode('utf-8')
            text = re.sub('<[^>]+>', '', xml_content)
            return text
    except Exception as e:
        return f"Error: {e}"

print(f"Extracting text from {docx_path}...")
text = extract_text(docx_path)
with open(output_path, "w", encoding="utf-8") as f:
    f.write(text)
print(f"Text saved to {output_path}")
