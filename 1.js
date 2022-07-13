const total = 1000000000;
let bank = 350000000;
let sisaTotal = total - bank
let obligasiNegara = sisaTotal * 0.3
let sahamA = sisaTotal  * 0.35
let sahamB = sisaTotal - obligasiNegara - sahamA

const hasilInvestas = () => {
    keuntunganInvestasi = 
    bank * 3.5/100 +
    obligasiNegara * 13/100 +
    sahamA * 14.5/100 +
    sahamB * 12.5/100 
    
    console.log(keuntunganInvestasi * 2 + total)
}

hasilInvestas()



