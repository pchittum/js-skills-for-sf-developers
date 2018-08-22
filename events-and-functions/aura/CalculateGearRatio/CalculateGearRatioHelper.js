({
    getGears : function(recordId, component) {

        // fetch gear values
        // fetch currenct gear number values

        // set gear ratio

        const action = component.get("c.retrieveBikeGears");

        action.setParam('bikeId', recordId);

        action.setCallback(this, (response)=>{

            const state = response.getState();

            if (state === "SUCCESS") {

                const gearsForBike = response.getReturnValue();

                let frontGears, rearGears; 

                gearsForBike.forEach((item)=>{
                    if(item.Gear_Type__c === "Front (Drive)") {
                        frontGears = item.Bike_Gear_Teeth__r; 
                    } else if (item.Gear_Type__c === "Rear (Driven)") {
                        rearGears = item.Bike_Gear_Teeth__r;
                    }
                });

                const frontList = frontGears.map((item, index)=>{
                    return {index: index, value: Number(item.Name)};
                });
                const rearList = rearGears.map((item, index)=>{
                    return {index: index, value: Number(item.Name)};
                });

                component.set("v.frontGears", frontList);
                component.set("v.rearGears", rearList);

                console.log(component.get("v.frontGears"));
                console.log(component.get("v.rearGears"));

                this.setGearRatio(component);
            }

        });

        $A.enqueueAction(action);        
    }, 
    setGearRatio : function(component){

        console.log('got to setGearRatio');

        const selectedFront = component.get("v.currentFrontGear"),
              selectedRear = component.get("v.currentRearGear"),
              frontGears = component.get("v.frontGears"),
              rearGears = component.get("v.rearGears");

        console.log(frontGears[selectedFront].Number_of_Teeth__c);
        console.log(rearGears[selectedRear].Number_of_Teeth__c);

        const ratio = frontGears[selectedFront].value / rearGears[selectedRear].value;

        console.log(ratio);

        component.set("v.gearRatio", ratio);
    }
})
