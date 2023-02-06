function Mover(){
    let arr = ['100px', '200px', '300px', '400px', '500px','150px', '250px', '0' , '350px', '450px', '550px', '120px', '330px']

    let arr2 = ['20px', '150px', '280px', '480px', '650px']
    let m = Math.floor(Math.random(10)*10)
    let changeTop= arr[m];
    let changeRight = arr2[m];

    console.log(arr[m], arr2[m]);
    document.getElementById('welcome').style.top = changeTop;
    document.getElementById('welcome').style.right = changeRight;

}
function mover(){
    while(true){
        Mover()
        wait(5000)
    }
}