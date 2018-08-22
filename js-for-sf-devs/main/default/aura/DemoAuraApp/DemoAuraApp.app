<aura:application extends="force:slds">


    <aura:handler name="render" value="{!this}" action="{!c.handleRender}"/>
    <aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>

    {!v.body}

    <div aura:id="div"/>
<!--
    <c:TestSingletonHelper />
    <c:TestSingletonHelper />
    <c:TestSingletonHelper />

    <div style="margin: 20px">
        <c:BasicDOMExample aura:id="dom-example"></c:BasicDOMExample>
    </div>
    -->
</aura:application>	
