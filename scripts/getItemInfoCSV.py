import urllib.request
from os.path import dirname, join, abspath

ENDPOINT = "https://storage.googleapis.com/item_description/itemsInfo.csv"

content = urllib.request.urlopen(ENDPOINT).read()

xml_path = join(dirname(abspath(__file__)), "itemsInfo.csv")

with open(xml_path, 'wb') as output:
    output.write(content)
