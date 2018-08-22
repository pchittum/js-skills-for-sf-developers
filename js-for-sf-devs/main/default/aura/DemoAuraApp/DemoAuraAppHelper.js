({
    addComponent : function(component, newCmpType) {

        $A.createComponent(
            newCmpType,
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


    }
})
