({
    handleRender : function(component, event, helper) {

        console.log("in render");
/*
        $A.createComponent(
            "c:ShowTestSingletonHelpers",
            {},
            function(newItem, status, errorMessage){
                if(status==="SUCCESS"){
                    var body = component.get("v.body");
                    body.push(newItem);
                    component.set("v.body", body);
                } else if (status === "INCOMPLETE"){
                    console.warn("Not able to fetch component");
                } else {
                    console.error("Failed t add component");
                }
            }
        );
  */
    }, 
    handleInit : function(component, event, helper) {
        console.log("in init");

        helper.addComponent(component, "c:ShowTestSingletonHelpers");
    }
  
})
