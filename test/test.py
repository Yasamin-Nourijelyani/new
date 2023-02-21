import unittest
from bs4 import BeautifulSoup

# code sample from "https://github.com/csc301-2023-winter/assignment-2-7-2-zhan7393-liivan5/blob/main/spelling/test/test.py"
class TestHTML(unittest.TestCase):
    # test for whether some certain text is included in html
    def test_html_text(self):
        target = open("public/index.html", encoding="utf8")
        text = BeautifulSoup(target, 'html.parser')
        self.assertIn("Rapid", text.get_text())
        self.assertIn("Naming", text.get_text())
        target.close()
        
        
if __name__ == '__main__':
    unittest.main()