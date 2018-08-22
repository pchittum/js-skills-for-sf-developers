({
    getGears : function(recordId, component) {

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

                this.setGearRatio(component);
            }

        });

        $A.enqueueAction(action);        
    }, 
    setGearRatio : function(component){

        const selectedFront = component.get("v.currentFrontGear"),
              selectedRear = component.get("v.currentRearGear"),
              frontGears = component.get("v.frontGears"),
              rearGears = component.get("v.rearGears");

        const ratio = frontGears[selectedFront].value / rearGears[selectedRear].value;

        component.set("v.gearRatio", ratio);
    }
})
