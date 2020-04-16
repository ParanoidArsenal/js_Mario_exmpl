'use strict'
//jquery usage practise

console.log("!!!!");

let pyramidPlace = $(".pyramide").eq(0);

let levelRange = $(document.getElementsByName("levelRange")[0]);
let levelRange_lbl = $(document.getElementsByName("levelRange_lbl")[0]);
levelRange_lbl.text(levelRange.val());


let brick_type = $(document.getElementsByName("brick_type")[0]);

printPyramid(levelRange.val(), pyramidPlace, brick_type.val());


levelRange.on("change", (e) => { levelRange_lbl.text(e.target.value);
    console.log(e.target.value);
    pyramidPlace.empty();
    printPyramid(e.target.value, pyramidPlace, brick_type.val());
     });


brick_type.on("change", (e) => { pyramidPlace.empty();
    printPyramid(levelRange.val(), pyramidPlace, e.target.value);
  });

function printPyramid(height, node, block_type) {
    let levels = height;
    let cur_block_nmb = 2;

    let pyramidPlace = node;

    if(levels == 0) return;

    while(levels){
        let line_div = $('<div></div>');
        for(let i = 0; i < levels - 1; i++){
            let white_block = $('<div></div>');
            white_block.addClass("white_block");
            line_div.append(white_block);
        }

        for(let i = 0; i < cur_block_nmb; i++){
            let block = $('<div></div>');
            block.addClass(block_type);
            line_div.append(block);
        }

        pyramidPlace.append(line_div)

        console.log(" ".repeat(levels - 1) + "#".repeat(cur_block_nmb));

        cur_block_nmb++;
        levels--
    }
}
