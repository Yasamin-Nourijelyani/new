import unittest
from bs4 import BeautifulSoup

# code sample from "https://github.com/csc301-2023-winter/assignment-2-10-3-tangjiag-wang1423/blob/main/frontend_with_test/front-end.py"
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