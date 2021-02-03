Feature: Search text in google.com

Scenario: Search for text Harish

    Given Navigate to google home page
    When Type text "Harish" in search box
    And Click search button
    Then Verify the title is "Harish - Google Search"