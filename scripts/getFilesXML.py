import urllib.request
from os.path import dirname, join, abspath

ENDPOINT = "https://storage.googleapis.com/steeplehill"

content = urllib.request.urlopen(ENDPOINT).read()

xml_path = join(dirname(abspath(__file__)), "xmlfile.xml")

with open(xml_path, 'wb') as output:
    output.write(content)
