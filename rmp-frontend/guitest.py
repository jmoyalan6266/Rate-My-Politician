import unittest
import time
from selenium import webdriver
# from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class GUITests(unittest.TestCase):
    def setUp(self):
        # create a new remote Chrome session
        self.driver = webdriver.Remote(command_executor="http://selenium__standalone-chrome:4444/wd/hub",  options=webdriver.ChromeOptions())
        #For running locally
        # self.driver = webdriver.Remote(
        #     command_executor='http://127.0.0.1:4444/wd/hub',
        #     desired_capabilities=DesiredCapabilities.CHROME)
        self.driver.implicitly_wait(10)
        self.driver.maximize_window()

        # navigate to the application home page
        self.driver.get("http://www.ratemypolitician.me/")

    def tearDown(self):
        self.driver.quit()
    
    def test_splash(self):
        assert "Rate My Politician" in self.driver.page_source
    
    def test_splash_component(self):
        self.driver.find_element_by_link_text("Find your State").click()
        time.sleep(3)
        assert "Alabama" in self.driver.page_source
    
    def test_splash_component1(self):
        self.driver.find_element_by_link_text("Find your Politician").click()
        time.sleep(3)
        assert "Tommy" in self.driver.page_source

    def test_states(self):
        self.driver.find_element_by_link_text("States").click()
        time.sleep(1)
        assert "Alabama" in self.driver.page_source
    
    def test_individual_state(self):
        self.driver.find_element_by_link_text("States").click()
        time.sleep(3)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(3)
        assert "Twitter" in self.driver.page_source
    
    def test_individual_state1(self):
        self.driver.find_element_by_link_text("States").click()
        time.sleep(3)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(3)
        assert "Median Age" in self.driver.page_source
    
    def test_sources(self):
        self.driver.find_element_by_link_text("News Sources").click()
        time.sleep(3)
        assert "Npr" in self.driver.page_source
    
    def test_individual_source(self):
        self.driver.find_element_by_link_text("News Sources").click()
        time.sleep(3)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(3)
        assert "Year" in self.driver.page_source

    def test_individual_source1(self):
        self.driver.find_element_by_link_text("News Sources").click()
        time.sleep(3)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(3)
        assert "Based" in self.driver.page_source

    def test_politicians(self):
        self.driver.find_element_by_link_text("Politicians").click()
        time.sleep(5)
        assert "Tommy" in self.driver.page_source
    
    def test_individual_politician(self):
        self.driver.find_element_by_link_text("Politicians").click()
        time.sleep(5)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(2)
        assert "Party" in self.driver.page_source
    
    def test_individual_politician1(self):
        self.driver.find_element_by_link_text("Politicians").click()
        time.sleep(5)
        self.driver.find_element_by_link_text("More Info").click()
        time.sleep(2)
        assert "Office City" in self.driver.page_source

    def test_about(self):
        self.driver.find_element_by_link_text("About").click()
        time.sleep(1)
        assert "Commits" in self.driver.page_source

    def test_about2(self):
        self.driver.find_element_by_link_text("About").click()
        time.sleep(1)
        assert "Issues" in self.driver.page_source

        

if __name__ == "__main__":
    unittest.main()

