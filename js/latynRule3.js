"use strict";
let latynRule_3 = {
	name:"latynRule_3",
	Letter_A:{
				reg:/А/g,
				translateRule:"A"
			},
	Letter_a:{
				reg:/а/g,
				translateRule:"a"
			},
	Letter_B:{
				reg:/Б/g,
				translateRule:"B"
			},
	Letter_b:{
				reg:/б/g,
				translateRule:"b"
			},
	Letter_V:{
				reg:/В/g,
				translateRule:"V"
			},
	Letter_v:{
				reg:/в/g,
				translateRule:"v"
			},
	Letter_H:{
				reg:/Г/g,
				translateRule:"H"
			},
	Letter_h:{
				reg:/г/g,
				translateRule:"h"
			},
	Letter_G:{
				reg:/Ґ/g,
				translateRule:"G"
			},
	Letter_g:{
				reg:/ґ/g,
				translateRule:"g"
			},
	Letter_D:{
				reg:/Д/g,
				translateRule:"D"
			},
	Letter_d:{
				reg:/д/g,
				translateRule:"d"
			},
	Letter_E:{
				reg:/Е/g,
				translateRule:"E"
			},
	Letter_e:{
				reg:/е/g,
				translateRule:"e"
			},
	Letter_Je:{
				reg:/Є/g,
				translateRule:"Je"
			},
	Letter_je:{
				rule1:{	
						reg:/(?!^)є/g,
						translateRule:"ie"
					},
				rule2:{
						reg:/^є/g,
						translateRule:"ye"
					}
			},
	Letter_Zh:{
				reg:/Ж/g,
				translateRule:"Zh"
			},
	Letter_zh:{
				reg:/ж/g,
				translateRule:"zh"
			},
	Letter_Z:{
				reg:/З/g,
				translateRule:"Z"
			},
	Letter_z:{
				reg:/з/g,
				translateRule:"z"
			},
	Letter_Y:{
				reg:/И/g,
				translateRule:"Y"
			},
	Letter_y:{
				reg:/и/g,
				translateRule:"y"
			},
	Letter_I:{
				reg:/І/g,
				translateRule:"I"
			},
	Letter_i:{
				reg:/і/g,
				translateRule:"i"
			},
	Letter_Yi:{
				reg:/Ї/g,
				translateRule:"Yi"
			},
	Letter_yi:{
				rule1:{	
						reg:/(?!^)ї/g,
						translateRule:"i"
					},
				rule2:{
						reg:/^ї/g,
						translateRule:"yi"
					}
			},
	Letter_J:{
				reg:/Й/g,
				translateRule:"J"
			},
	Letter_j:{
				rule1:{	
						reg:/(?!^)й/g,
						translateRule:"i"
					},
				rule2:{
						reg:/^й/g,
						translateRule:"y"
					}
			},
	Letter_K:{
				reg:/К/g,
				translateRule:"K"
			},
	Letter_k:{
				reg:/к/g,
				translateRule:"k"
			},
	Letter_L:{
				reg:/Л/g,
				translateRule:"L"
			},
	Letter_l:{
				reg:/л/g,
				translateRule:"l"
			},
	Letter_M:{
				reg:/М/g,
				translateRule:"M"
			},
	Letter_m:{
				reg:/м/g,
				translateRule:"m"
			},
	Letter_N:{
				reg:/Н/g,
				translateRule:"N"
			},
	Letter_n:{
				reg:/н/g,
				translateRule:"n"
			},
	Letter_O:{
				reg:/О/g,
				translateRule:"O"
			},
	Letter_o:{
				reg:/о/g,
				translateRule:"o"
			},
	Letter_P:{
				reg:/П/g,
				translateRule:"P"
			},
	Letter_p:{
				reg:/п/g,
				translateRule:"p"
			},
	Letter_R:{
				reg:/Р/g,
				translateRule:"R"
			},
	Letter_r:{
				reg:/р/g,
				translateRule:"r"
			},
	Letter_S:{
				reg:/С/g,
				translateRule:"S"
			},
	Letter_s:{
				reg:/с/g,
				translateRule:"s"
			},
	Letter_T:{
				reg:/Т/g,
				translateRule:"T"
			},
	Letter_t:{
				reg:/т/g,
				translateRule:"t"
			},
	Letter_U:{
				reg:/У/g,
				translateRule:"U"
			},
	Letter_u:{
				reg:/у/g,
				translateRule:"u"
			}, 
	Letter_F:{
				reg:/Ф/g,
				translateRule:"F"
			},
	Letter_f:{
				reg:/ф/g,
				translateRule:"f"
			},
	Letter_Kh:{
				reg:/Х/g,
				translateRule:"Kh"
			},
	Letter_kh:{
				reg:/х/g,
				translateRule:"kh"
			},
	Letter_Ts:{
				reg:/Ц/g,
				translateRule:"Ts"
			},
	Letter_ts:{
				reg:/ц/g,
				translateRule:"ts"
			},
	Letter_Ch:{
				reg:/Ч/g,
				translateRule:"Ch"
			},
	Letter_ch:{
				reg:/ч/g,
				translateRule:"ch"
			},
	Letter_Sh:{
				reg:/Ш/g,
				translateRule:"Sh"
			},
	Letter_sh:{
				reg:/ш/g,
				translateRule:"sh"
			},
	Letter_Sch:{
				reg:/Щ/g,
				translateRule:"Shch"
			},
	Letter_sch:{
				reg:/щ/g,
				translateRule:"shch"
			},
	Letter_Yu:{
				reg:/Ю/g,
				translateRule:"Yu"
			},
	Letter_iu:{
				rule1:{	
						reg:/(?!^)ю/g,
						translateRule:"iu"
					},
				rule2:{
						reg:/^ю/g,
						translateRule:"yu"
					}
			},
	Letter_Ya:{
				reg:/Я/g,
				translateRule:"Ya"
			},
	Letter_ia:{
				rule1:{	
						reg:/(?!^)я/g,
						translateRule:"ya"
					},
				rule2:{
						reg:/^я/g,
						translateRule:"ia"
					}
			},
	Letter_softMark:{
				reg:/ь/g,
				translateRule:""
			},
	Letter_apostrophe:{
				reg:/'/g,
				translateRule:"'"
			}
};