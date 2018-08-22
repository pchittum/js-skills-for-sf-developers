({
    doInit : function(component, event, helper) {
        
        /**
         * Demonstration of single helper for many instances of the same component
         * 
         * Add properties to both component and helper
         * If this component is added to another component several times you can 
         * see that the component.compProperty will always go through the init logic
         * 
         * On the other hand helper.helperProperty will only init for the first
         * and all other instances will go through the increment cycle
         */

         //grab the component instance unique ID
        const id = component.getGlobalId();
        
        //Component object: either init or increment
        if (!component.compProperty){
            component.compProperty = 1; 
            console.log("Initialized compProperty value in " + id + " to 1");
        } else {
            component.compProperty += 1; 
            console.log("Incremented compProperty value in " + id + " to " + helper.helperProperty);
        }
        
        //Helper object: either init or increment
        if (!helper.helperProperty) {
            helper.helperProperty = 1; 
            console.log("Initialized helperProperty value in " + id + " to 1 ");
        } else {
            helper.helperProperty += 1; 
            console.log("Incremented helperProperty value in " + id + " to " + helper.helperProperty);   
        }
    }
})