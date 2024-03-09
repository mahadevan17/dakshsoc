
function mod26() {
    
    let num = parseFloat(document.getElementById("input26").value);
    if (isNaN(num)) {
        alert("Please enter a number");
        out26.value="";
        return;
    } 
    else if (num>=0){
        out26.value=num%26;
    }
    else if (num<0){
        while(num<0){
            num += 26;
        }
        out26.value=num;
    }
}


    function calculate() {
        

        const myarr = ["keycat", "dog", "fish", "truekey", "falsekey", "den", "fat", "cry", "fry", "cryptocurrency"];
        const a = "abcdefghijklmnopqrstuvwxyz123456";
        let bin = document.getElementById("input").value;
        if (bin === "") {
            alert("Please enter binary code (combination of 0 and 1)");
            outans.value=""
            return;
        }

        let binaryString = bin.toString();


        if (binaryString.length !== 15) {
            outans.value = myarr[Math.floor(Math.random() * myarr.length)];

            return;
        }

        let ans = "";
        let st = "";
        for (let i = 0; i < 15; i = i + 5) {
            let j = 0; // Reset j to 0 for each iteration
            while (j < 5) {
                st = st + binaryString[i + j];
                j++;
            }
            let decimalValue = parseInt(st, 2);
            ans = ans + a[decimalValue];
            st = "";
        }

        outans.value = ans;
    
    }

    function updateHeading(selectedName) {
        document.getElementById('heading').textContent = "Selected GATE: " + selectedName;
        document.getElementById('selected-gate').value=selectedName
        outgate.value=""
        Input1.value=""
        Input2.value=""

    }
    
        function Calc(){
            const selected_gate = document.getElementById('selected-gate').value;
            const int1=document.getElementById('Input1').value
            const int2=document.getElementById('Input2').value
            const out=document.getElementById('out')
            if (int1 === '' || int2 === '' || int1 !== '1' && int1 !== '0' || int2 !== '1' && int2 !== '0'){
                alert("Please enter only 1 or 0");
                outgate.value=""
                Input1.value=""
                Input2.value=""
                return;
                
            }

            if (selected_gate=="AND"){
                if (int1 == 1 && int2 == 1) {
                    outgate.value = "true";
                } else {
                    outgate.value = "false";
                }
            }

            else if  (selected_gate=="OR"){
                if (int1 == 1 || int2 == 1) {
                    outgate.value = "true";
                } else {
                    outgate.value = "false";
                }
            }

            else if  (selected_gate=="XOR"){
                if (int1 == int2) {
                    outgate.value = "false";
                } else {
                    outgate.value = "true";
                }
            }

            else if  (selected_gate=="NOR"){
                if (int1 == 1 || int2 == 1) {
                    outgate.value = "false";
                } else {
                    outgate.value = "true";
                }
            }

            else if (selected_gate=="NAND"){
                if (int1 == 1 && int2 == 1) {
                    outgate.value = "false";
                } else {
                    outgate.value = "true";
                }
            }

            else if (selected_gate=="XNOR"){
                if (int1 == int2) {
                    outgate.value = "true";
                } else {
                    outgate.value = "false";
                }
            }
        }

    
 function showDiv(divId) {

   document.getElementById('two-input').style.display = 'none';
   document.getElementById('content').style.display = 'none';
   document.getElementById('finalans').style.display = 'none';
   document.getElementById('mod26').style.display = 'none';

   
   document.getElementById(divId).style.display = 'block';
 }

