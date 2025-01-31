
figma.showUI(__html__);

figma.ui.onmessage = msg => {
    if (msg.type === 'applyOpacity') {
        // for(const node of figma.currentPage.selection){
        //     if("opacity" in node){
        //         node.opacity = msg.opacityValue/100;
        //     }
        // }
        // const nodes = figma.currentPage.findAll();
        // for(const node of nodes){
        //     if("opacity" in node){
        //         node.opacity = msg.opacityValue/100;
        //     }
        // }
        // const nodes = figma.currentPage.findAll(n=> n.type === 'RECTANGLE');
        // for(const node of nodes){
        //     if("opacity" in node){
        //         node.opacity = msg.opacityValue/100;
        //     }
        // }
        const node = figma.currentPage.findOne(n => n.type === 'RECTANGLE');
        if (node !== null) {
            if ("opacity" in node) {
                node.opacity = msg.opacityValue / 100;
            }
        }
    } else if (msg.type === 'exitPlugin') {
        figma.closePlugin();
    }
}