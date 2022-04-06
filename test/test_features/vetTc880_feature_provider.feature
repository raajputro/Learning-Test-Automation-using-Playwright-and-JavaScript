Feature: VET TC 880 - Provider Portion

        Scenario: Login to Field Nation as Provider
            Given I navigate to Field Nation Site
             When I login using username 'benzema.goalmachine' and password '1'
             Then I verify 'Reset Filters' is visible for provider user
              And I logout from user

                       # Scenario: Accept the routed workorder
#         #      When I navigate to a specific workorder "177951"
#         #       And I click on accept button 1
#         #       And I click on acknowledge button 1
#         #      Then I verify workorder status is accepted 1
#         #       And I logout 1