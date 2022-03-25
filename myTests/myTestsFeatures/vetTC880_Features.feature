Feature: Route a work order as buyer and accept as provider

Feature Description
        Scenario: Login as Buyer
            Given I navigate to FieldNation
             When I login as username "premierBuyerCompany1615273528" and password "1"
             Then I verify 'Flightboard' is visible for buyer

        # Scenario: Select a workorder and route
        #      When I navigate to workorder "177951"
        #       And I click on route button to "73249" provider
        #      Then I verify workorder status is routed
        #       And I logout

        # Scenario: Login as Provider
        #     Given I navigate to "https://ui-qa1.fndev.net/"
        #      When I login as username "benzema.goalmachine" and password "1"
        #      Then I verify 'some_text' is visible for provider

        # Scenario: Accept the routed workorder
        #      When I navigate to workorder "177951"
        #       And I click on accept button
        #       And I click on acknowledge button
        #      Then I verify workorder status is accepted
        #       And I logout