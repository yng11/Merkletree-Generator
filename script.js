function clickButton(){
    let str = document.querySelector("textarea").value.replace(/ /g,"");
    str = str.replace(/\n/g, "");
    let addrList = str.split(",");

    const leaves = addrList.map(x => keccak256(x));
    const tree = new MerkleTree(leaves, keccak256, {sortPairs: true});
    const buf2hex = x => '0x' + x.toString('hex');


    document.querySelector("p").innerHTML = "머클루트 : " + buf2hex(tree.getRoot());
}