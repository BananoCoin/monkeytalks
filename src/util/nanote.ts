// Nanote - send notes with Nano
// Jason Pawlak
// https://www.github.com/pawapps/nanote
import bigInt from 'big-integer'

/**
 * Generates the character sets
 */
var gen_charsets = function() {
    var charsets = [" etaoinsrhl"," 1234567890"," 1234567890'"," etaoinsrhl'"," 1234567890'"," etaoinsrhl'"," 1234567890'"," etaoinsrhl'"," 1234567890]"," etaoinsrhl]"," 1234567890["," etaoinsrhl["," 1234567890:"," etaoinsrhl:"," 1234567890;"," etaoinsrhl;"," 1234567890>"," etaoinsrhld"," 1234567890<"," etaoinsrhl<"," 1234567890/"," etaoinsrhl/"," 1234567890?"," etaoinsrhl?"," etaoinsrhl>"," etaoinsrhl~"," 1234567890."," etaoinsrhl."," 1234567890,"," etaoinsrhl,"," 1234567890="," etaoinsrhl="," 1234567890+"," etaoinsrhl+"," 1234567890_"," etaoinsrhl_"," 1234567890-"," etaoinsrhl-"," 1234567890)"," etaoinsrhl)"," 1234567890("," etaoinsrhl("," 1234567890*"," etaoinsrhl*"," 1234567890&"," etaoinsrhl&"," 1234567890%"," etaoinsrhl%"," 1234567890$"," 1234567890~"," etaoinsrhl!"," etaoinsrhl$"," 1234567890#"," etaoinsrhl#"," 1234567890@"," etaoinsrhl@"," 1234567890!"," etaoinsrhld$"," etaoinsrhld_"," etaoinsrhld'"," etaoinsrhld@"," etaoinsrhld-"," etaoinsrhld="," etaoinsrhld'"," etaoinsrhld,"," etaoinsrhld#"," etaoinsrhld)"," etaoinsrhld."," etaoinsrhld~"," etaoinsrhld?"," etaoinsrhld!"," etaoinsrhld+"," etaoinsrhld("," etaoinsrhld/"," etaoinsrhld<"," etaoinsrhld>"," etaoinsrhld*"," etaoinsrhld%"," etaoinsrhld;"," etaoinsrhld:"," etaoinsrhld'"," etaoinsrhld["," etaoinsrhldc"," etaoinsrhld]"," etaoinsrhld&"," etaoinsrhldc_"," etaoinsrhldc'"," etaoinsrhldc+"," etaoinsrhldc$"," etaoinsrhldc'"," etaoinsrhldc,"," etaoinsrhldc/"," etaoinsrhldc)"," etaoinsrhldc<"," etaoinsrhldc@"," etaoinsrhldc>"," etaoinsrhldc*"," etaoinsrhldc#"," etaoinsrhldc-"," etaoinsrhldc%"," etaoinsrhldc~"," etaoinsrhldc;"," etaoinsrhldc["," etaoinsrhldc'"," etaoinsrhldc."," etaoinsrhldc:"," etaoinsrhldcu"," etaoinsrhldc="," etaoinsrhldc]"," etaoinsrhldc?"," etaoinsrhldc&"," etaoinsrhldc("," etaoinsrhldc!"," etaoinsrhldcu$"," etaoinsrhldcu!"," etaoinsrhldcu;"," etaoinsrhldcu'"," etaoinsrhl()-_"," 1234567890$%&*"," etaoinsrhldcu/"," etaoinsrhldcu#"," etaoinsrhldcu="," etaoinsrhl$%&*"," 1234567890~!@#"," etaoinsrhldcu<"," etaoinsrhldcu~"," etaoinsrhldcu'"," etaoinsrhl~!@#"," etaoinsrhldcu>"," etaoinsrhldcu*"," etaoinsrhldcu@"," etaoinsrhldcu-"," etaoinsrhldcu."," etaoinsrhl?/<>"," etaoinsrhldcu%"," 1234567890+=,."," etaoinsrhldcu_"," 1234567890;:[]"," etaoinsrhldcu'"," etaoinsrhldcu+"," etaoinsrhl+=,."," 1234567890()-_"," etaoinsrhldcu:"," etaoinsrhldcu?"," etaoinsrhldcu("," etaoinsrhldcu]"," etaoinsrhldcu,"," etaoinsrhldcu)"," etaoinsrhldcu&"," etaoinsrhl;:[]"," 1234567890?/<>"," etaoinsrhldcu["," etaoinsrhldcum"," etaoinsrhldcum["," etaoinsrhldcum&"," etaoinsrhldcum_"," etaoinsrhldcum]"," etaoinsrhldcum'"," etaoinsrhldcum+"," etaoinsrhldcum-"," etaoinsrhldcum@"," etaoinsrhldcum'"," etaoinsrhldcum:"," etaoinsrhldcum="," etaoinsrhldcum~"," etaoinsrhldcumf"," etaoinsrhldcum,"," etaoinsrhldcum)"," etaoinsrhldcum;"," etaoinsrhld;:[]"," etaoinsrhldcum%"," etaoinsrhldcum!"," etaoinsrhldcum#"," etaoinsrhldcum>"," etaoinsrhldcum'"," etaoinsrhld?/<>"," etaoinsrhldcum."," etaoinsrhldcum*"," etaoinsrhld+=,."," etaoinsrhldcum?"," etaoinsrhldcum("," etaoinsrhld~!@#"," etaoinsrhld()-_"," etaoinsrhldcum$"," etaoinsrhldcum/"," etaoinsrhldcum<"," etaoinsrhld$%&*"," etaoinsrhldcumf%"," etaoinsrhldcumf)"," etaoinsrhldcumf<"," etaoinsrhldcumf$"," etaoinsrhldc~!@#"," etaoinsrhldc()-_"," etaoinsrhldcumfp"," etaoinsrhldcumf("," etaoinsrhldcumf?"," etaoinsrhldcumf["," etaoinsrhldcumf*"," etaoinsrhldc+=,."," etaoinsrhldcumf."," etaoinsrhldcumf'"," etaoinsrhldc?/<>"," etaoinsrhldcumf#"," etaoinsrhldcumf>"," etaoinsrhldcumf/"," etaoinsrhldcumf;"," etaoinsrhldc$%&*"," etaoinsrhldcumf,"," etaoinsrhldc;:[]"," etaoinsrhldcumf~"," etaoinsrhldcumf="," etaoinsrhldcumf:"," etaoinsrhldcumf'"," etaoinsrhldcumf@"," etaoinsrhldcumf]"," etaoinsrhldcumf-"," etaoinsrhldcumf+"," etaoinsrhldcumf!"," etaoinsrhldcumf&"," etaoinsrhldcumf_"," etaoinsrhldcumf'"," etaoinsrhldcumfp$"," etaoinsrhldcumfp)"," etaoinsrhldcu+=,."," etaoinsrhldcumfp;"," etaoinsrhldcumfp."," etaoinsrhldcu;:[]"," etaoinsrhldcumfp%"," etaoinsrhldcumfpg"," etaoinsrhldcu~!@#"," etaoinsrhldcumfp="," etaoinsrhldcumfp'"," etaoinsrhldcumfp]"," etaoinsrhldcumfp("," etaoinsrhldcumfp?"," etaoinsrhldcumfp'"," etaoinsrhldcumfp~"," etaoinsrhldcumfp+"," etaoinsrhldcumfp@"," etaoinsrhldcu?/<>"," etaoinsrhldcumfp:"," etaoinsrhldcumfp#"," etaoinsrhldcumfp<"," etaoinsrhldcumfp-"," etaoinsrhldcumfp,"," etaoinsrhldcumfp&"," etaoinsrhldcumfp*"," etaoinsrhldcumfp!"," etaoinsrhldcumfp>"," etaoinsrhldcumfp_"," etaoinsrhldcumfp/"," etaoinsrhldcumfp["," etaoinsrhldcu$%&*"," etaoinsrhldcumfp'"," etaoinsrhldcu()-_"," etaoinsrhldcumfpg;"," etaoinsrhl?/<>;:[]"," etaoinsrhldcumfpg)"," 1234567890()-_+=,."," etaoinsrhl()-_+=,."," etaoinsrhldcumfpg?"," etaoinsrhldcumfpg'"," etaoinsrhldcumfpg["," etaoinsrhldcumfpg>"," etaoinsrhldcum+=,."," etaoinsrhldcumfpg="," 1234567890~!@#$%&*"," etaoinsrhl~!@#$%&*"," etaoinsrhldcumfpg("," etaoinsrhldcumfpg$"," etaoinsrhldcumfpg@"," etaoinsrhldcum;:[]"," etaoinsrhldcum$%&*"," etaoinsrhldcumfpg~"," etaoinsrhldcumfpg+"," etaoinsrhldcumfpg'"," etaoinsrhldcum()-_"," etaoinsrhldcumfpg*"," etaoinsrhldcumfpg."," etaoinsrhldcumfpg%"," etaoinsrhldcumfpg'"," etaoinsrhldcumfpg&"," etaoinsrhldcumfpg-"," etaoinsrhldcumfpg<"," etaoinsrhldcumfpg#"," etaoinsrhldcumfpg:"," etaoinsrhldcum?/<>"," etaoinsrhldcum~!@#"," etaoinsrhldcumfpg_"," etaoinsrhldcumfpg,"," etaoinsrhldcumfpgw"," etaoinsrhldcumfpg]"," etaoinsrhldcumfpg/"," etaoinsrhldcumfpg!"," 1234567890?/<>;:[]"," etaoinsrhldcumfpgw'"," etaoinsrhldcumfpgw<"," etaoinsrhldcumfpgw_"," etaoinsrhldcumf?/<>"," etaoinsrhldcumfpgw#"," 1234567890?/<>;:[]'"," etaoinsrhldcumfpgw~"," etaoinsrhldcumf+=,."," etaoinsrhldcumfpgw-"," etaoinsrhldcumfpgw+"," etaoinsrhldcumf()-_"," etaoinsrhldcumfpgw$"," etaoinsrhldcumfpgw'"," etaoinsrhldcumf$%&*"," etaoinsrhldcumfpgw="," etaoinsrhldcumf~!@#"," etaoinsrhld?/<>;:[]"," etaoinsrhldcumfpgw)"," etaoinsrhldcumfpgw'"," etaoinsrhldcumfpgw,"," etaoinsrhldcumf;:[]"," etaoinsrhldcumfpgw%"," etaoinsrhldcumfpgw@"," etaoinsrhld~!@#$%&*"," etaoinsrhldcumfpgw."," etaoinsrhldcumfpgw]"," etaoinsrhldcumfpgwy"," etaoinsrhl?/<>;:[]'"," etaoinsrhldcumfpgw["," etaoinsrhldcumfpgw("," etaoinsrhldcumfpgw?"," etaoinsrhldcumfpgw&"," etaoinsrhldcumfpgw:"," etaoinsrhld()-_+=,."," etaoinsrhldcumfpgw/"," etaoinsrhldcumfpgw;"," etaoinsrhldcumfpgw!"," etaoinsrhldcumfpgw>"," etaoinsrhldcumfpgw*"," etaoinsrhldcumfpgwy,"," etaoinsrhldcumfp;:[]"," etaoinsrhldcumfpgwy_"," etaoinsrhldcumfp+=,."," etaoinsrhldcumfpgwy%"," etaoinsrhldcumfpgwy$"," etaoinsrhldcumfpgwy!"," etaoinsrhldcumfpgwy]"," etaoinsrhldcumfpgwy@"," etaoinsrhldcumfpgwy."," etaoinsrhldcumfpgwy~"," etaoinsrhldc~!@#$%&*"," etaoinsrhldc?/<>;:[]"," etaoinsrhldcumfpgwyb"," etaoinsrhldcumfp$%&*"," etaoinsrhldcumfpgwy["," etaoinsrhldcumfp?/<>"," etaoinsrhld?/<>;:[]'"," etaoinsrhldcumfpgwy("," etaoinsrhldcumfpgwy<"," etaoinsrhldcumfpgwy="," etaoinsrhldcumfpgwy?"," etaoinsrhldcumfpgwy'"," etaoinsrhldcumfpgwy:"," etaoinsrhldcumfp~!@#"," etaoinsrhldcumfpgwy&"," tnsrhldcmfpgwbvkxjqz"," etaoinsrhldc()-_+=,."," etaoinsrhldcumfpgwy-"," etaoinsrhldcumfpgwy#"," etaoinsrhldcumfpgwy/"," etaoinsrhldcumfpgwy;"," etaoinsrhldcumfpgwy'"," etaoinsrhldcumfpgwy)"," etaoinsrhldcumfpgwy>"," etaoinsrhldcumfpgwy'"," etaoinsrhldcumfpgwy+"," etaoinsrhldcumfpgwy*"," etaoinsrhl1234567890"," etaoinsrhldcumfp()-_"," etaoinsrhl1234567890;"," etaoinsrhldcumfpgwyb,"," etaoinsrhldcumfpg+=,."," tnsrhldcmfpgwbvkxjqz'"," tnsrhldcmfpgwbvkxjqz~"," tnsrhldcmfpgwbvkxjqz'"," etaoinsrhl1234567890+"," etaoinsrhldcumfpgwyb%"," etaoinsrhl1234567890,"," tnsrhldcmfpgwbvkxjqz_"," tnsrhldcmfpgwbvkxjqz]"," tnsrhldcmfpgwbvkxjqz,"," etaoinsrhl1234567890!"," tnsrhldcmfpgwbvkxjqz("," etaoinsrhldcumfpgwyb@"," etaoinsrhl1234567890]"," etaoinsrhl1234567890("," etaoinsrhldcumfpgwyb]"," etaoinsrhl1234567890-"," tnsrhldcmfpgwbvkxjqz+"," etaoinsrhldcumfpgwyb_"," etaoinsrhldcumfpgwyb."," etaoinsrhldcu?/<>;:[]"," etaoinsrhl1234567890%"," tnsrhldcmfpgwbvkxjqz)"," etaoinsrhldcumfpgwyb~"," etaoinsrhldcumfpg$%&*"," tnsrhldcmfpgwbvkxjqz-"," etaoinsrhl1234567890."," tnsrhldcmfpgwbvkxjqz["," etaoinsrhl1234567890)"," etaoinsrhldcu~!@#$%&*"," tnsrhldcmfpgwbvkxjqz."," etaoinsrhl1234567890["," etaoinsrhldcumfpgwyb["," tnsrhldcmfpgwbvkxjqz@"," etaoinsrhl1234567890#"," etaoinsrhldcumfpgwyb-"," tnsrhldcmfpgwbvkxjqz%"," etaoinsrhldcumfpgwyb("," etaoinsrhldcumfpg?/<>"," etaoinsrhldcumfpgwyb="," etaoinsrhldc?/<>;:[]'"," etaoinsrhldcumfpgwyb$"," etaoinsrhldcumfpgwyb#"," etaoinsrhldcumfpgwyb?"," etaoinsrhldcumfpgwyb'"," etaoinsrhldcumfpgwybv"," tnsrhldcmfpgwbvkxjqz:"," etaoinsrhl1234567890:"," etaoinsrhldcumfpgwyb:"," etaoinsrhldcumfpg~!@#"," etaoinsrhl1234567890?"," etaoinsrhl1234567890@"," tnsrhldcmfpgwbvkxjqz'"," etaoinsrhldcumfpgwyb&"," tnsrhldcmfpgwbvkxjqz?"," etaoinsrhldcu()-_+=,."," etaoinsrhl1234567890="," etaoinsrhl1234567890$"," etaoinsrhl1234567890~"," etaoinsrhl1234567890'"," tnsrhldcmfpgwbvkxjqz*"," tnsrhldcmfpgwbvkxjqz;"," etaoinsrhldcumfpgwyb;"," tnsrhldcmfpgwbvkxjqz="," etaoinsrhl1234567890'"," etaoinsrhldcumfpgwyb/"," etaoinsrhl1234567890'"," etaoinsrhldcumfpgwyb'"," etaoinsrhl1234567890&"," etaoinsrhldcumfpgwyb'"," tnsrhldcmfpgwbvkxjqz>"," etaoinsrhldcumfpgwyb!"," etaoinsrhl1234567890/"," etaoinsrhl1234567890>"," tnsrhldcmfpgwbvkxjqz!"," etaoinsrhldcumfpgwyb>"," tnsrhldcmfpgwbvkxjqz/"," etaoinsrhldcumfpgwyb)"," etaoinsrhl1234567890*"," etaoinsrhldcumfpgwyb+"," tnsrhldcmfpgwbvkxjqz&"," etaoinsrhldcumfpg()-_"," etaoinsrhl1234567890_"," etaoinsrhldcumfpgwyb*"," tnsrhldcmfpgwbvkxjqz$"," etaoinsrhldcumfpg;:[]"," tnsrhldcmfpgwbvkxjqz#"," etaoinsrhldcumfpgwyb<"," tnsrhldcmfpgwbvkxjqz<"," etaoinsrhl1234567890<"," etaoinsrhldcumfpgwybv)"," etaoinsrhldcumfpgwybv%"," etaoinsrhldcumfpgwybv,"," etaoinsrhldcumfpgw;:[]"," etaoinsrhldcumfpgwybv'"," etaoinsrhldcumfpgwybv<"," etaoinsrhldcumfpgw~!@#"," etaoinsrhldcumfpgwybv*"," etaoinsrhldcumfpgwybv]"," etaoinsrhldcumfpgwybv!"," etaoinsrhldcumfpgwybv'"," etaoinsrhldcumfpgwybv>"," etaoinsrhldcumfpgwybv."," etaoinsrhldcumfpgwybv'"," etaoinsrhldcumfpgw?/<>"," etaoinsrhldcumfpgwybv_"," etaoinsrhldcumfpgwybv$"," etaoinsrhldcumfpgwybv#"," etaoinsrhldcumfpgwybv="," etaoinsrhldcumfpgw$%&*"," etaoinsrhldcum?/<>;:[]"," etaoinsrhldcumfpgwybv/"," etaoinsrhldcumfpgw+=,."," etaoinsrhldcumfpgwybv;"," etaoinsrhldcumfpgwybv["," etaoinsrhldcumfpgwybv("," etaoinsrhldcumfpgwybv-"," etaoinsrhldcum~!@#$%&*"," etaoinsrhldcumfpgwybv~"," etaoinsrhldcumfpgwybv?"," etaoinsrhldcumfpgwybvk"," etaoinsrhldcu?/<>;:[]'"," etaoinsrhldcumfpgwybv@"," etaoinsrhldcumfpgwybv&"," etaoinsrhldcum()-_+=,."," etaoinsrhldcumfpgwybv:"," etaoinsrhldcumfpgw()-_"," etaoinsrhldcumfpgwybv+"," etaoinsrhldcumfpgwybvk#"," etaoinsrhldcumfpgwy;:[]"," etaoinsrhldcumfpgwybvk:"," etaoinsrhldcumfpgwybvk@"," etaoinsrhldcumfpgwybvk&"," etaoinsrhldcumfpgwy()-_"," etaoinsrhldcumf~!@#$%&*"," etaoinsrhldcumfpgwybvkx"," etaoinsrhldcumfpgwybvk?"," etaoinsrhldcum?/<>;:[]'"," etaoinsrhldcumfpgwybvk~"," etaoinsrhldcumfpgwybvk-"," etaoinsrhldcumfpgwybvk("," etaoinsrhldcumf?/<>;:[]"," etaoinsrhldcumfpgwybvk;"," etaoinsrhldcumfpgwybvk["," etaoinsrhldcumfpgwybvk/"," etaoinsrhldcumfpgwy$%&*"," etaoinsrhldcumfpgwy+=,."," etaoinsrhldcumf()-_+=,."," etaoinsrhldcumfpgwybvk_"," etaoinsrhldcumfpgwybvk$"," etaoinsrhldcumfpgwybvk="," etaoinsrhldcumfpgwy?/<>"," etaoinsrhldcumfpgwybvk."," etaoinsrhldcumfpgwybvk'"," etaoinsrhldcumfpgwybvk>"," etaoinsrhldcumfpgwy~!@#"," etaoinsrhldcumfpgwybvk*"," etaoinsrhldcumfpgwybvk]"," etaoinsrhldcumfpgwybvk!"," etaoinsrhldcumfpgwybvk'"," etaoinsrhldcumfpgwybvk'"," etaoinsrhldcumfpgwybvk)"," etaoinsrhldcumfpgwybvk<"," etaoinsrhldcumfpgwybvk,"," etaoinsrhldcumfpgwybvk%"," etaoinsrhldcumfpgwybvk+"," etaoinsrhldcumfpgwybvkx>"," etaoinsrhldcumfpgwybvkx?"," etaoinsrhldcumfpgwybvkx*"," etaoinsrhldcumfpgwybvkx;"," etaoinsrhldcumfpgwybvkx'"," etaoinsrhldcumfpgwybvkx-"," etaoinsrhl1234567890$%&*"," tnsrhldcmfpgwbvkxjqz?/<>"," etaoinsrhldcumfpgwybvkx!"," tnsrhldcmfpgwbvkxjqz()-_"," etaoinsrhldcumfpgwybvkx("," etaoinsrhldcumfp()-_+=,."," etaoinsrhldcumfpgwybvkx~"," etaoinsrhldcumfpgwybvkx_"," etaoinsrhl1234567890()-_"," etaoinsrhldcumfpgwybvkx["," etaoinsrhldcumfpgwybvkx@"," etaoinsrhldcumfpgwyb$%&*"," etaoinsrhldcumfpgwybvkxj"," etaoinsrhl1234567890;:[]"," etaoinsrhldcumfpgwyb()-_"," etaoinsrhl1234567890?/<>"," etaoinsrhldcumfpgwybvkx&"," etaoinsrhldcumfpgwybvkx$"," tnsrhldcmfpgwbvkxjqz~!@#"," etaoinsrhldcumfpgwybvkx#"," etaoinsrhldcumfpgwybvkx="," etaoinsrhldcumfpgwybvkx."," tnsrhldcmfpgwbvkxjqz+=,."," etaoinsrhldcumf?/<>;:[]'"," etaoinsrhl1234567890~!@#"," etaoinsrhl1234567890+=,."," etaoinsrhldcumfpgwybvkx'"," etaoinsrhldcumfpgwybvkx%"," tnsrhldcmfpgwbvkxjqz;:[]"," etaoinsrhldcumfpgwyb~!@#"," etaoinsrhldcumfpgwyb+=,."," etaoinsrhldcumfpgwybvkx/"," etaoinsrhldcum1234567890"," etaoinsrhldcumfpgwybvkx]"," etaoinsrhldcumfpgwyb?/<>"," etaoinsrhldcumfpgwybvkx)"," etaoinsrhldcumfpgwybvkx'"," etaoinsrhldcumfpgwybvkx:"," etaoinsrhldcumfpgwybvkx+"," etaoinsrhldcumfpgwyb;:[]"," etaoinsrhldcumfpgwybvkx<"," tnsrhldcmfpgwbvkxjqz$%&*"," etaoinsrhldcumfpgwybvkx,"," etaoinsrhldcumfp?/<>;:[]"," etaoinsrhldcumfp~!@#$%&*"," etaoinsrhldcumfpgwybvkxj!"," etaoinsrhldcum1234567890'"," etaoinsrhldcum1234567890,"," etaoinsrhldcum1234567890!"," etaoinsrhldcumfpgwybvkxj~"," etaoinsrhldcumfpgwybvkxj<"," etaoinsrhldcumfpgwybv;:[]"," etaoinsrhldcum1234567890]"," etaoinsrhldcum1234567890("," etaoinsrhldcumfpgwybvkxj'"," etaoinsrhldcum1234567890<"," etaoinsrhldcum1234567890'"," etaoinsrhldcum1234567890'"," etaoinsrhldcumfpgwybvkxj)"," etaoinsrhldcum1234567890-"," etaoinsrhldcumfpgwybvkxj'"," etaoinsrhldcum1234567890$"," etaoinsrhldcum1234567890="," etaoinsrhldcum1234567890@"," etaoinsrhldcumfpgwybvkxj="," etaoinsrhldcumfpgwybvkxj]"," etaoinsrhldcumfpgwybv~!@#"," etaoinsrhldcumfpgwybvkxj*"," etaoinsrhldcumfpgwybvkxj%"," etaoinsrhldcum1234567890~"," etaoinsrhldcum1234567890%"," etaoinsrhldcumfpgwybvkxj."," etaoinsrhldcumfpgwybvkxj'"," etaoinsrhldcumfpgwybvkxj$"," etaoinsrhldcum1234567890."," etaoinsrhldcum1234567890["," etaoinsrhldcum1234567890)"," etaoinsrhldcumfpg()-_+=,."," etaoinsrhldcumfpgwybvkxj,"," etaoinsrhldcumfpgwybv$%&*"," etaoinsrhldcumfpgwybvkxj["," etaoinsrhldcumfpgwybvkxj("," etaoinsrhldcumfpgwybv?/<>"," etaoinsrhldcum1234567890:"," etaoinsrhldcumfpgwybvkxj>"," etaoinsrhldcumfpgwybvkxj?"," etaoinsrhldcum1234567890+"," etaoinsrhldcumfpgwybvkxj-"," etaoinsrhldcumfpgwybvkxj+"," etaoinsrhldcumfpgwybvkxj:"," etaoinsrhldcum1234567890/"," etaoinsrhldcum1234567890?"," etaoinsrhldcumfpgwybvkxj&"," etaoinsrhldcumfpgwybv()-_"," etaoinsrhldcum1234567890>"," etaoinsrhldcumfpg~!@#$%&*"," etaoinsrhldcumfpgwybvkxj@"," etaoinsrhldcum1234567890;"," etaoinsrhldcumfpgwybvkxj_"," etaoinsrhldcumfp?/<>;:[]'"," etaoinsrhldcum1234567890#"," etaoinsrhldcumfpgwybvkxj#"," etaoinsrhldcumfpgwybvkxj;"," etaoinsrhldcumfpg?/<>;:[]"," etaoinsrhldcum1234567890*"," etaoinsrhldcum1234567890&"," etaoinsrhldcumfpgwybv+=,."," etaoinsrhldcumfpgwybvkxjq"," etaoinsrhldcum1234567890_"," etaoinsrhldcumfpgwybvkxj/"," etaoinsrhldcumfpgwybvkxjq?"," etaoinsrhldcumfpgwybvkxjq+"," etaoinsrhldcumfpgwybvkxjq$"," etaoinsrhldcumfpgwybvkxjq~"," etaoinsrhldcumfpgwybvkxjq:"," etaoinsrhldcumfpgwybvkxjq'"," etaoinsrhldcumfpgwybvkxjq,"," etaoinsrhldcumfpgwybvkxjq'"," etaoinsrhldcumfpgw()-_+=,."," etaoinsrhldcumfpgwybvkxjq-"," etaoinsrhldcumfpgwybvkxjq&"," etaoinsrhldcumfpgwybvkxjq)"," etaoinsrhldcumfpgwybvk()-_"," etaoinsrhldcumfpgwybvkxjq*"," etaoinsrhldcumfpgwybvkxjq("," etaoinsrhldcumfpgwybvkxjq'"," etaoinsrhldcumfpgwybvkxjq!"," etaoinsrhldcumfpgwybvkxjq@"," etaoinsrhldcumfpgw~!@#$%&*"," etaoinsrhldcumfpgwybvk~!@#"," etaoinsrhldcumfpgwybvkxjq["," etaoinsrhldcumfpgwybvk;:[]"," etaoinsrhldcumfpgwybvk$%&*"," etaoinsrhldcumfpgwybvkxjq;"," etaoinsrhldcumfpgwybvkxjq/"," etaoinsrhldcumfpgwybvkxjq#"," etaoinsrhldcumfpgwybvk?/<>"," etaoinsrhldcumfpgwybvkxjq]"," etaoinsrhldcumfpgwybvkxjq%"," etaoinsrhldcumfpgw?/<>;:[]"," 1234567890~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz"," etaoinsrhldcumfpgwybvkxjq<"," etaoinsrhldcumfpg?/<>;:[]'"," etaoinsrhldcumfpgwybvk+=,."," etaoinsrhl~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjq."," etaoinsrhldcumfpgwybvkxjq_"," etaoinsrhldcumfpgwybvkxjq="," etaoinsrhldcumfpgwybvkxjq>"," etaoinsrhldcumfpgwybvkxjqz["," etaoinsrhldcumfpgwybvkxjqz_"," etaoinsrhldcumfpgwybvkx+=,."," etaoinsrhldcumfpgwybvkxjqz'"," etaoinsrhldcumfpgwybvkxjqz&"," etaoinsrhldcumfpgwybvkxjqz#"," etaoinsrhldcumfpgwybvkxjqz;"," etaoinsrhldcumfpgwybvkxjqz@"," etaoinsrhldcumfpgwybvkxjqz/"," etaoinsrhldcumfpgwybvkx()-_"," etaoinsrhldcumfpgwybvkxjqz?"," etaoinsrhldcumfpgwybvkxjqz>"," etaoinsrhldcumfpgwybvkxjqz:"," etaoinsrhldcumfpgwybvkxjqz+"," etaoinsrhld~!@#$%&*()-_+=,."," etaoinsrhldcumfpgw?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz~"," etaoinsrhldcumfpgwybvkx$%&*"," etaoinsrhldcumfpgwybvkx?/<>"," etaoinsrhldcumfpgwy~!@#$%&*"," etaoinsrhldcumfpgwybvkxjqz*"," etaoinsrhldcumfpgwybvkxjqz)"," etaoinsrhldcumfpgwy()-_+=,."," etaoinsrhldcumfpgwybvkxjqz."," etaoinsrhldcumfpgwybvkxjqz%"," etaoinsrhldcumfpgwybvkx~!@#"," etaoinsrhldcumfpgwybvkxjqz("," etaoinsrhldcumfpgwybvkxjqz="," etaoinsrhldcumfpgwybvkx;:[]"," etaoinsrhldcumfpgwybvkxjqz$"," etaoinsrhldcumfpgwybvkxjqz-"," etaoinsrhldcumfpgwybvkxjqz'"," etaoinsrhldcumfpgwy?/<>;:[]"," etaoinsrhldcumfpgwybvkxjqz'"," etaoinsrhldcumfpgwybvkxjqz<"," etaoinsrhldcumfpgwybvkxjqz]"," etaoinsrhldcumfpgwybvkxjqz!"," etaoinsrhldcumfpgwybvkxjqz,"," etaoinsrhldcum1234567890+=,."," etaoinsrhldcumfpgwybvkxj?/<>"," etaoinsrhldcumfpgwyb()-_+=,."," etaoinsrhldcum1234567890;:[]"," etaoinsrhldcumfpgwybvkxj$%&*"," etaoinsrhldcum1234567890?/<>"," etaoinsrhldcumfpgwy?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz()-_+=,."," etaoinsrhldcumfpgwyb?/<>;:[]"," etaoinsrhldcum1234567890$%&*"," etaoinsrhldcumfpgwybvkxj~!@#"," etaoinsrhldcumfpgwybvkxj;:[]"," etaoinsrhl1234567890()-_+=,."," etaoinsrhldcumfpgwyb~!@#$%&*"," etaoinsrhldcumfpgwybvkxj()-_"," tnsrhldcmfpgwbvkxjqz~!@#$%&*"," etaoinsrhldcum1234567890~!@#"," etaoinsrhldcumfpgw1234567890"," etaoinsrhldcum1234567890()-_"," tnsrhldcmfpgwbvkxjqz?/<>;:[]"," etaoinsrhldcumfpgwybvkxj+=,."," etaoinsrhl1234567890?/<>;:[]"," etaoinsrhl1234567890~!@#$%&*"," etaoinsrhldc~!@#$%&*()-_+=,."," etaoinsrhldcumfpgw1234567890["," etaoinsrhldcumfpgw1234567890@"," etaoinsrhl1234567890?/<>;:[]'"," etaoinsrhldcumfpgw1234567890,"," etaoinsrhldcumfpgw1234567890="," etaoinsrhldcumfpgwybvkxjq?/<>"," etaoinsrhldcumfpgwybv?/<>;:[]"," etaoinsrhldcumfpgw1234567890)"," etaoinsrhldcumfpgwybvkxjq+=,."," etaoinsrhldcumfpgw1234567890#"," etaoinsrhldcumfpgw1234567890'"," etaoinsrhldcumfpgwybv()-_+=,."," etaoinsrhldcumfpgwybvkxjq()-_"," etaoinsrhldcumfpgw1234567890-"," etaoinsrhldcumfpgw1234567890("," etaoinsrhldcumfpgwybvkxjq$%&*"," etaoinsrhldcu~!@#$%&*()-_+=,."," etaoinsrhldcumfpgw1234567890."," etaoinsrhldcumfpgw1234567890_"," etaoinsrhldcumfpgw1234567890?"," etaoinsrhldcumfpgwybvkxjq~!@#"," etaoinsrhldcumfpgw1234567890$"," etaoinsrhldcumfpgw1234567890'"," etaoinsrhldcumfpgw1234567890'"," etaoinsrhldcumfpgw1234567890]"," etaoinsrhldcumfpgw1234567890%"," etaoinsrhldcumfpgwybvkxjq;:[]"," etaoinsrhldcumfpgw1234567890:"," etaoinsrhldcumfpgw1234567890;"," etaoinsrhldcumfpgw1234567890&"," etaoinsrhldcumfpgwybv~!@#$%&*"," etaoinsrhldcumfpgwyb?/<>;:[]'"," etaoinsrhldcumfpgw1234567890+"," etaoinsrhldcumfpgw1234567890>"," tnsrhldcmfpgwbvkxjqz?/<>;:[]'"," etaoinsrhldcumfpgw1234567890~"," etaoinsrhldcumfpgw1234567890<"," etaoinsrhldcumfpgw1234567890/"," etaoinsrhldcumfpgw1234567890*"," etaoinsrhldcumfpgw1234567890!"," etaoinsrhldcumfpgwybvk~!@#$%&*"," etaoinsrhldcumfpgwybvkxjqz~!@#"," tnsrhldcmfpgwbvkxjqz1234567890"," etaoinsrhldcum~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz$%&*"," etaoinsrhldcumfpgwybv?/<>;:[]'"," etaoinsrhldcumfpgwybvk()-_+=,."," etaoinsrhldcumfpgwybvkxjqz+=,."," etaoinsrhldcumfpgwybvk?/<>;:[]"," etaoinsrhldcumfpgwybvkxjqz?/<>"," etaoinsrhldcumfpgwybvkxjqz;:[]"," etaoinsrhldcumfpgwybvkxjqz()-_"," tnsrhldcmfpgwbvkxjqz1234567890&"," tnsrhldcmfpgwbvkxjqz1234567890'"," tnsrhldcmfpgwbvkxjqz1234567890]"," tnsrhldcmfpgwbvkxjqz1234567890<"," tnsrhldcmfpgwbvkxjqz1234567890!"," tnsrhldcmfpgwbvkxjqz1234567890+"," tnsrhldcmfpgwbvkxjqz1234567890/"," tnsrhldcmfpgwbvkxjqz1234567890["," etaoinsrhldcumfpgwybvkx?/<>;:[]"," tnsrhldcmfpgwbvkxjqz1234567890*"," tnsrhldcmfpgwbvkxjqz1234567890'"," tnsrhldcmfpgwbvkxjqz1234567890?"," tnsrhldcmfpgwbvkxjqz1234567890%"," tnsrhldcmfpgwbvkxjqz1234567890:"," etaoinsrhldcumf~!@#$%&*()-_+=,."," tnsrhldcmfpgwbvkxjqz1234567890."," etaoinsrhldcumfpgwybvk?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz1234567890;"," tnsrhldcmfpgwbvkxjqz1234567890'"," tnsrhldcmfpgwbvkxjqz1234567890_"," tnsrhldcmfpgwbvkxjqz1234567890>"," etaoinsrhldcumfpgwybvkx()-_+=,."," tnsrhldcmfpgwbvkxjqz1234567890)"," tnsrhldcmfpgwbvkxjqz1234567890#"," tnsrhldcmfpgwbvkxjqz1234567890("," tnsrhldcmfpgwbvkxjqz1234567890-"," tnsrhldcmfpgwbvkxjqz1234567890,"," tnsrhldcmfpgwbvkxjqz1234567890@"," tnsrhldcmfpgwbvkxjqz1234567890="," tnsrhldcmfpgwbvkxjqz1234567890$"," tnsrhldcmfpgwbvkxjqz1234567890~"," etaoinsrhldcumfpgwybvkx~!@#$%&*"," etaoinsrhldcum1234567890?/<>;:[]"," etaoinsrhldcumfpgwybvkx?/<>;:[]'"," etaoinsrhldcumfpgwybvkxj()-_+=,."," etaoinsrhldcumfpgwybvk1234567890"," etaoinsrhldcum1234567890~!@#$%&*"," etaoinsrhldcumfpgwybvkxj~!@#$%&*"," etaoinsrhldcumfp~!@#$%&*()-_+=,."," etaoinsrhldcum1234567890()-_+=,."," etaoinsrhldcumfpgw1234567890$%&*"," etaoinsrhldcumfpgw1234567890()-_"," etaoinsrhldcumfpgw1234567890+=,."," etaoinsrhldcumfpgw1234567890;:[]"," etaoinsrhldcumfpgw1234567890?/<>"," etaoinsrhldcumfpgwybvkxj?/<>;:[]"," etaoinsrhldcumfpgw1234567890~!@#"," etaoinsrhldcumfpgwybvk1234567890]"," etaoinsrhldcumfpgwybvk1234567890/"," etaoinsrhldcumfpgwybvk1234567890&"," etaoinsrhldcumfpgwybvk1234567890'"," etaoinsrhldcumfpgwybvk1234567890'"," etaoinsrhldcumfpgwybvk1234567890@"," etaoinsrhldcumfpgwybvkxjq()-_+=,."," etaoinsrhldcumfpg~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvk1234567890_"," etaoinsrhldcumfpgwybvk1234567890;"," etaoinsrhldcumfpgwybvk1234567890%"," etaoinsrhldcumfpgwybvk1234567890$"," etaoinsrhldcumfpgwybvkxjq~!@#$%&*"," etaoinsrhldcum1234567890?/<>;:[]'"," etaoinsrhldcumfpgwybvk1234567890)"," etaoinsrhldcumfpgwybvk1234567890!"," etaoinsrhldcumfpgwybvk1234567890+"," etaoinsrhldcumfpgwybvk1234567890#"," etaoinsrhldcumfpgwybvk1234567890-"," etaoinsrhldcumfpgwybvk1234567890."," etaoinsrhldcumfpgwybvk1234567890("," etaoinsrhldcumfpgwybvk1234567890="," etaoinsrhldcumfpgwybvk1234567890:"," etaoinsrhldcumfpgwybvk1234567890'"," etaoinsrhldcumfpgwybvk1234567890>"," etaoinsrhldcumfpgwybvk1234567890,"," etaoinsrhldcumfpgwybvk1234567890*"," etaoinsrhldcumfpgwybvkxj?/<>;:[]'"," etaoinsrhldcumfpgwybvk1234567890["," etaoinsrhldcumfpgwybvk1234567890<"," etaoinsrhldcumfpgwybvk1234567890?"," etaoinsrhldcumfpgwybvkxjq?/<>;:[]"," etaoinsrhldcumfpgwybvk1234567890~"," etaoinsrhldcumfpgwybvkxjqz()-_+=,."," etaoinsrhldcumfpgwybvkxjqz?/<>;:[]"," etaoinsrhldcumfpgw~!@#$%&*()-_+=,."," tnsrhldcmfpgwbvkxjqz1234567890~!@#"," tnsrhldcmfpgwbvkxjqz1234567890$%&*"," etaoinsrhldcumfpgwybvkxjq?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz1234567890()-_"," tnsrhldcmfpgwbvkxjqz1234567890+=,."," tnsrhldcmfpgwbvkxjqz1234567890?/<>"," tnsrhldcmfpgwbvkxjqz1234567890;:[]"," etaoinsrhldcumfpgwybvkxjqz~!@#$%&*"," etaoinsrhldcumfpgwybvkxjqz?/<>;:[]'"," 1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwy~!@#$%&*()-_+=,."," etaoinsrhl~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgw1234567890()-_+=,."," etaoinsrhldcumfpgw1234567890~!@#$%&*"," etaoinsrhldcumfpgwybvk1234567890;:[]"," etaoinsrhldcumfpgw1234567890?/<>;:[]"," etaoinsrhldcumfpgwybvk1234567890?/<>"," etaoinsrhldcumfpgwybvk1234567890+=,."," etaoinsrhldcumfpgwybvk1234567890()-_"," etaoinsrhld~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvk1234567890$%&*"," etaoinsrhldcumfpgwybvk1234567890~!@#"," etaoinsrhldcumfpgwyb~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890"," etaoinsrhl1234567890~!@#$%&*()-_+=,."," tnsrhldcmfpgwbvkxjqz~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890'"," etaoinsrhldcumfpgwybvkxjqz1234567890:"," etaoinsrhldcumfpgwybvkxjqz1234567890#"," etaoinsrhldcumfpgwybvkxjqz1234567890_"," etaoinsrhldcumfpgwybvkxjqz1234567890="," etaoinsrhldc~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890,"," etaoinsrhldcumfpgwybvkxjqz1234567890("," etaoinsrhldcumfpgwybvkxjqz1234567890+"," etaoinsrhldcumfpgwybvkxjqz1234567890$"," etaoinsrhldcumfpgwybvkxjqz1234567890-"," etaoinsrhldcumfpgwybvkxjqz1234567890'"," etaoinsrhldcumfpgwybvkxjqz1234567890."," etaoinsrhldcumfpgwybvkxjqz1234567890?"," etaoinsrhldcumfpgw1234567890?/<>;:[]'"," etaoinsrhldcumfpgwybv~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890@"," etaoinsrhldcumfpgwybvkxjqz1234567890*"," etaoinsrhldcumfpgwybvkxjqz1234567890/"," etaoinsrhldcumfpgwybvkxjqz1234567890<"," etaoinsrhldcumfpgwybvkxjqz1234567890>"," etaoinsrhldcumfpgwybvkxjqz1234567890!"," etaoinsrhldcumfpgwybvkxjqz1234567890&"," etaoinsrhldcumfpgwybvkxjqz1234567890;"," etaoinsrhldcumfpgwybvkxjqz1234567890'"," etaoinsrhldcumfpgwybvkxjqz1234567890~"," etaoinsrhldcumfpgwybvkxjqz1234567890)"," etaoinsrhldcumfpgwybvkxjqz1234567890%"," etaoinsrhldcumfpgwybvkxjqz1234567890]"," etaoinsrhldcumfpgwybvkxjqz1234567890["," etaoinsrhldcumfpgwybvk~!@#$%&*()-_+=,."," tnsrhldcmfpgwbvkxjqz1234567890?/<>;:[]"," tnsrhldcmfpgwbvkxjqz1234567890~!@#$%&*"," tnsrhldcmfpgwbvkxjqz1234567890()-_+=,."," etaoinsrhldcu~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcum~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkx~!@#$%&*()-_+=,."," tnsrhldcmfpgwbvkxjqz1234567890?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890$%&*"," etaoinsrhldcumfpgwybvkxjqz1234567890()-_"," etaoinsrhldcumfpgwybvkxj~!@#$%&*()-_+=,."," etaoinsrhldcumf~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890~!@#"," etaoinsrhldcumfpgwybvkxjqz1234567890?/<>"," etaoinsrhldcumfpgwybvk1234567890()-_+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890;:[]"," etaoinsrhldcumfpgwybvk1234567890~!@#$%&*"," etaoinsrhldcumfpgwybvk1234567890?/<>;:[]"," etaoinsrhldcum1234567890~!@#$%&*()-_+=,."," etaoinsrhldcumfp~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjq~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvk1234567890?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz~!@#$%&*()-_+=,."," etaoinsrhldcumfpg~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgw~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890()-_+=,."," etaoinsrhldcumfpgwy~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890?/<>;:[]"," etaoinsrhldcumfpgwybvkxjqz1234567890~!@#$%&*"," etaoinsrhldcumfpgw1234567890~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvkxjqz1234567890?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwyb~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhl1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybv~!@#$%&*()-_+=,.?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz1234567890~!@#$%&*()-_+=,."," etaoinsrhldcumfpgwybvk~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkx~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvk1234567890~!@#$%&*()-_+=,."," etaoinsrhldcum1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxj~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjq~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890~!@#$%&*()-_+=,."," etaoinsrhldcumfpgw1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," tnsrhldcmfpgwbvkxjqz1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvk1234567890~!@#$%&*()-_+=,.?/<>;:[]'"," etaoinsrhldcumfpgwybvkxjqz1234567890~!@#$%&*()-_+=,.?/<>;:[]'"];
    return charsets;
    /// This function generates this returned list.  No reason to regenerate it every time.
    /*
    var charsets = [];
    var letters = 'etaoinsrhldcumfpgwybvkxjqz';     // sorted by usage frequency in the English language
    var letters_no_vowels = 'tnsrhldcmfpgwbvkxjqz';
    var numbers = '1234567890';
    var puncs_list = ['', '~', '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', ',', '.', '?', '/', '<', '>', ';', ':', '[', ']', '\''];
    var puncs = puncs_list.slice(0);
    
    // Groups punctuations
    for (var i=0; i<puncs_list.length; i=i+4) { puncs.push(puncs_list.join('').slice(i, i+4)); }
    for (var i=0; i<puncs_list.length; i=i+8) { puncs.push(puncs_list.join('').slice(i, i+8)); }
    for (var i=0; i<puncs_list.length; i=i+16) { puncs.push(puncs_list.join('').slice(i, i+16)); }
    puncs.push(puncs_list.join(''));
    for (var punc of puncs)
    {
        // Punctuation
        for (var i=10; i<=letters.length; i++)
        {
            charsets.push(' ' + letters.slice(0, i) + punc);
        }

        // Numbers and punctuation
        charsets.push(' ' + letters.slice(0, 10) + numbers + punc);
        charsets.push(' ' + letters.slice(0, 14) + numbers + punc);
        charsets.push(' ' + letters.slice(0, 18) + numbers + punc);
        charsets.push(' ' + letters.slice(0, 22) + numbers + punc);
        charsets.push(' ' + letters + numbers + punc);

        // No vowels
        charsets.push(' ' + letters_no_vowels + punc);
        charsets.push(' ' + letters_no_vowels + numbers + punc);

        // Only numbers, no letters
        charsets.push(' ' + numbers + punc);
    }
    // Sort charsets so shortests charsets are at the beginning
    charsets = charsets.sort(function(a,b) { return a.length - b.length; });
    // console.log('Generated ' + charsets.length + ' charsets');
    console.log(charsets.join('","'));
    return charsets;
    */
}

export default class Nanote {

    charsets : string[]
    charset_index_length : number
    verbose : boolean
    constructor(verbose=false) {
        this.charsets = gen_charsets();
        this.charset_index_length = 3;
        this.verbose = verbose;
    }

    /**
     * Finds the shortest character set for given string.  Returns -1 on error.
     * @param {string} plaintext string
     * @return {number} index of charsets. -1 on error.
     */
    shortest_charset(plaintext : string) {
        // Keep only unique characters in plaintext
        plaintext = String.prototype.concat(...new Set(plaintext));

        var ret = -1;
        var good_charset = true;

        // Iterate over all charsets
        for (var counter in this.charsets)
        {
            var charset = this.charsets[counter];
            good_charset = true;
            
            // Iterate over all characters in plaintext
            for (var char of plaintext)
            {
                // Plaintext character not found in this charset
                if (charset.indexOf(char) == -1)
                {
                    good_charset = false;
                    break;
                }
            }

            if (good_charset)
            {
                // Return first good charset because shorter charsets are
                // iterated over before longer charsets.
                return Number(counter);
            }
        }

        return ret;
    }

    /**
     * Calculates the checksum of given string of digits
     * checksum = ( sum(digits) + 1 ) % 10
     * @param {string} string of digits
     * @return {string} checksum value as string. false if error.
     */
    calculate_checksum(digits : string) : string {
        // Validate input
        if (!digits.match(/^\d+$/)) {
            return 'false';
        }
        var sum = 0;
        for (var digit of digits) {
            sum = sum + Number(digit);
        }

        sum++;
        return String(sum % 10);
    }

    /**
     * Validates the given checksum for given digits
     * @param {string} digits to calculate checksum
     * @param {string} expected checksum value
     * @return {boolean} true if valid, false if not valid
     */
    validate_checksum(digits : string, checksum : string) : boolean {
        // Validate input
        if (typeof digits != 'string') {
            return false;
        }
        if (typeof checksum != 'string') {
            return false;
        }
        if (!checksum.match(/^\d$/)) {
            return false;
        }
        if (this.calculate_checksum(digits) == checksum) {
            return true;
        }
        return false;
    }

    /**
     * Encodes plaintext string in Nano value
     * @param {string} plaintext string to encode
     * @return {string} formatted string as Nano value. false if error.
     */
    encode(plaintext : string) : string {
        // Prepend space. This space acts as a checksum for discerning nanote messages.
        // A space is the "least expensive" character
        plaintext = ' '+plaintext;

        var charset_index = this.shortest_charset(plaintext);
        if (charset_index == -1)
        {
            // No charset found
            if (this.verbose) { console.error('Failed to encode due to no available charset'); }
            return 'false';
        }
        if (this.verbose) { console.log('Encoding with charset (' + charset_index + '): ' + this.charsets[charset_index]); }
        
        var quotient = this.b10encode(plaintext, this.charsets[charset_index]);
       
        var nano = String(quotient);                                                    // Set encoded string
        nano = nano + String(charset_index).padStart(this.charset_index_length, '0');   // Set charset index
        var checksum = this.calculate_checksum(String(charset_index));                  // Set checksum
        if (checksum === 'false') {
            if (this.verbose) { console.error('Failed to encode due to failed checksum calculation'); }
            return 'false';
        }
        nano = nano + checksum;     // Set checksum
        nano = nano.padStart(30, '0');                      // Ensure leading zeros
        nano = nano.slice(0, -29) + '.' + nano.slice(-29);  // Add decimal
     
        return nano;
    }

    /**
     * Encodes plaintext string into Nano raw value
     * @param {string} plaintext string to encode
     * @return {string} formatted string as Nano raw value.  false if error
     */
    encode_raw(plaintext : string) : string {
        var nano = this.encode(plaintext);
        if (nano === 'false') {
            return 'false';
        }
        return nano.replace('.', '');
    }

    /**
     * Decodes Nano value string into plaintext string
     * @param {string} nano value as string
     * @return {string} plaintext decoded string. false if error.
     */
    decode(nano : string) : string
    {
        if (nano.match(/^\d+\.\d{29}/) == null) {
            if (this.verbose) { console.error('Failed to decode due to regex mismatch'); }
            return 'false';
        }
        try {
            var checksum = nano.slice(-1,);
            var charset_index = Number(nano.slice((this.charset_index_length*-1)-1, -1));
        } catch(err) {
            if (this.verbose) { console.error('Failed to decode due to amount parsing exception'); }
            return 'false';
        }
        if (this.validate_checksum(String(charset_index), checksum) === false) {
            if (this.verbose) { console.error('Failed to decode due to invalid checksum'); }
            return 'false';
        }

        if (this.verbose) { console.log('Decoding with charset (' + charset_index + '): ' + this.charsets[charset_index]); }

        // Format Nano value string to quotient
        var quotient = nano.replace('.', '');                                   // remove decimal
        quotient = quotient.slice(0, -1)                                        // remove checksum
        quotient = quotient.slice(0, (this.charset_index_length*-1));           // remove charset index
        let quotientNum : bigInt.BigInteger = bigInt(quotient);
                                                                                // and checksum length because quotient was shifted right)
        if (quotientNum.lt(bigInt.zero)) {
            // nano input was not larger than the minimum raw
            if (this.verbose) { console.error('Failed to decode due to amount not being larger than the minimum raw'); }
            return 'false';
        }
        var plaintext = this.b10decode(quotientNum, this.charsets[charset_index]);

        // Check that the first character is a space, as required by the protocol, and then strip it.
        if (plaintext[0] !== ' ') {
            if (this.verbose) { console.error('Failed to decode due to decoded string not beginning with a space character'); }
            return 'false';
        }
        plaintext = plaintext.slice(1,);

        return plaintext;
    }

    /**
     * Decodes raw amount of Nano into plaintext string
     * @param {string} nano raw value as string
     * @return {string} plaintext decoded string. false if error
     */
    decode_raw(raw : string) : string
    {
        // Input validation
        if (typeof raw != 'string') {
            if (this.verbose) { console.error('Failed to decode due to non string input'); }
            return 'false';
        }
        if (raw.length <= (this.charset_index_length + 1)) {
            // +1 for checksum
            if (this.verbose) { console.error('Failed to decode due to too short of string length'); }
            return 'false';
        }

        var nano = raw.padStart(30, '0');                   // Ensure leading zeros
        nano = nano.slice(0, -29) + '.' + nano.slice(-29);  // Add decimal
        return this.decode(nano);
    }

    /**
     * Base 10 encodes plaintext string from given charset
     * @param {string} plaintext string in which to encode
     * @param {string} character array where index denotes encoded value
     * @return {bigInt.BigInteger} value of encoding
     */
    b10encode(plaintext : string, charset : string) : bigInt.BigInteger
    {
        let quotient : bigInt.BigInteger = bigInt(0);
        let modulus : bigInt.BigInteger = bigInt(0);

        for (var char of plaintext)
        {
            modulus = bigInt(charset.indexOf(char)+1);
            quotient = (quotient.times(bigInt(charset.length+1))).add(modulus)
        }

        return quotient;
    }

    /**
     * Base 10 decode BigInt from given charset
     * @param {bigInt.BigInteger} value of encoding
     * @param {string} character array where index denotes encoded value
     * @return {string} plaintext decoded string
     */
    b10decode(quotient : bigInt.BigInteger, charset : string)
    {
        var plaintext = '';
        let modulus : bigInt.BigInteger = bigInt(0);

        while (quotient.notEquals(0) || modulus.notEquals(bigInt.zero))
        {
            modulus = quotient.mod(bigInt(charset.length+1));
            if (quotient.greater(bigInt.zero))
            {
                quotient = quotient.divide(bigInt(charset.length + 1))
            }
            if (modulus.greater(bigInt.zero))
            {
                plaintext = charset[modulus.minus(bigInt(1)).toJSNumber()] + plaintext;
            }
        }

        return plaintext;
    }

}