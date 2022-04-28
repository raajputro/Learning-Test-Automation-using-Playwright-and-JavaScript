Feature: VET TC 880 - Buyer Portion
        
        Scenario: Login to Field Nation as Buyer
            Given I navigate to Field Nation Site
             When I login using username 'premierBuyerCompany1615273528' and password '1'
             Then I verify 'Flightboard' is visible for buyer user

        Scenario: Select a workorder and route
             When I navigate to a specific workorder "177947"
              And I click on route button to given "73249" provider
             Then I verify workorder status is routed in pending assignment tab
              And I logout from user