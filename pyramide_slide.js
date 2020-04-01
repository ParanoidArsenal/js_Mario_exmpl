
console.log("!!!!");

let pyramidPlace = document.getElementsByClassName("pyramide")[0];

let levelRange = document.getElementsByName("levelRange")[0];
let levelRange_lbl = document.getElementsByName("levelRange_lbl")[0];
levelRange_lbl.innerText = levelRange.value;

let brick_type = document.getElementsByName("brick_type")[0];

printPyramid(levelRange.value, pyramidPlace, brick_type.value);

levelRange.addEventListener("change", (e) => { levelRange_lbl.innerText = e.target.value;
                                               removeAllChilds(pyramidPlace);
                                               printPyramid(e.target.value, pyramidPlace, brick_type.value);
                                                });


brick_type.addEventListener("change", (e) => { removeAllChilds(pyramidPlace);
                                              printPyramid(levelRange.value, pyramidPlace, e.target.value);
                                            });



function removeAllChilds(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
    }
}

function printPyramid(height, node, block_type) {
    let levels = height;
    let cur_block_nmb = 2;

    //let pyramidPlace = document.getElementById("pyramid");
    //let pyramidPlace = document.getElementsByClassName("pyramide")[0];
    let pyramidPlace = node;
    let white_block = document.createElement("div");
    white_block.classList.add("white_block");
    // let blueviolet_block = document.createElement("div")
    // blueviolet_block.classList.add("blueviolet_block");
    let block = document.createElement("div")
    block.classList.add(block_type);

    if(levels == 0) return;

    while(levels){

        let line_div = document.createElement("div");
        for(let i = 0; i < levels - 1; i++){
            let white_block = document.createElement("div");
            white_block.classList.add("white_block");
            line_div.appendChild(white_block);
        }

        for(let i = 0; i < cur_block_nmb; i++){
            // let blueviolet_block = document.createElement("div");
            // blueviolet_block.classList.add("blueviolet_block");
            // line_div.appendChild(blueviolet_block);
            let block = document.createElement("div");
            block.classList.add(block_type);
            line_div.appendChild(block);
        }

        pyramidPlace.appendChild(line_div)

        console.log(" ".repeat(levels - 1) + "#".repeat(cur_block_nmb));

        cur_block_nmb++;
        levels--
    }
    //pyramidPlace.removeChild(document.getElementById("construction"));
}
