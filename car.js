AFRAME.registerComponent("car-model", {
    schema: {
        model_ref :{type:"string",default:"./cyberpunk_car/scene.gltf"}
    },

    init:function(){
        this.el.setAttribute("gltf-model",this.data.model_ref)
        this.el.setAttribute("position",{x:0,y:50,z:80})
        this.el.setAttribute("rotation",{x:0,y:-100,z:0})
        this.el.setAttribute("scale",{x:0.3,y:0.3,z:0.3})

    },

    update:function(){
        window.addEventListener("click", e =>{
            this.data.clickCounter = this.data.clickCounter+1
            if(this.data.clickCounter === 1){
                const rotation = {x:0,y:20,z:0}
                this.el.setAttribute("rotation",rotation);

            } else if (this.data.clickCounter === 2){
            }
            const rotation = {x:0,y:100,z:0};
        })
    }
 
});
