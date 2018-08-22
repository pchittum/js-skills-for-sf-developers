public with sharing class BikeLightningService {

    @AuraEnabled
    public static List<Bike_Gear__c> retrieveBikeGears(String bikeId){

        List<Bike_Gear__c> gears = new List<Bike_Gear__c>();

        if (bikeId != null && bikeId != ''){
            gears = [
                SELECT 
                    Id,
                    Name,
                    Gear_Type__c,
                    (SELECT
                        Id,
                        Name,
                        Number_of_Teeth__c
                    FROM
                        Bike_Gear_Teeth__r
                    ORDER BY
                        Number_of_Teeth__c)
                FROM
                    Bike_Gear__c
                WHERE 
                    Bike__c = : bikeId
            ];
        }

        return gears; 
      
    }

}
