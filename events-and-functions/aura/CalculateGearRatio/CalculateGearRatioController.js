({
    handleInit : function(component, event, helper) {

        const recordId = component.get("v.recordId");
        helper.getGears(recordId, component);

    },
    handleSelectChange : function(component, event, helper) {

        helper.setGearRatio(component);
        
    }
})
