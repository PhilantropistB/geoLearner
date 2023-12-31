const countryFlagMap = new Map([
    ["Afghanistan", "w2560/af.png"],
    ["Albania", "w2560/al.png"],
    ["Algeria", "w2560/dz.png"],
    ["Andorra", "w2560/ad.png"],
    ["Angola", "w2560/ao.png"],
    ["Anguilla", "w2560/ai.png"],
    ["Antarctica", "w2560/aq.png"],
    ["Antigua and Barbuda", "w2560/ag.png"],
    ["Argentina", "w2560/ar.png"],
    ["Armenia", "w2560/am.png"],
    ["Aruba", "w2560/aw.png"],
    ["Australia", "w2560/au.png"],
    ["Austria", "w2560/at.png"],
    ["Azerbaijan", "w2560/az.png"],
    ["Bahamas", "w2560/bs.png"],
    ["Bahrain", "w2560/bh.png"],
    ["Bangladesh", "w2560/bd.png"],
    ["Barbados", "w2560/bb.png"],
    ["Belarus", "w2560/by.png"],
    ["Belgium", "w2560/be.png"],
    ["Belize", "w2560/bz.png"],
    ["Benin", "w2560/bj.png"],
    ["Bhutan", "w2560/bt.png"],
    ["Bolivia", "w2560/bo.png"],
    ["Bosnia and Herzegovina", "w2560/ba.png"],
    ["Botswana", "w2560/bw.png"],
    ["Brazil", "w2560/br.png"],
    ["Brunei", "w2560/bn.png"],
    ["Bulgaria", "w2560/bg.png"],
    ["Burkina Faso", "w2560/bf.png"],
    ["Burundi", "w2560/bi.png"],
    ["Cabo Verde", "w2560/cv.png"],
    ["Cambodia", "w2560/kh.png"],
    ["Cameroon", "w2560/cm.png"],
    ["Canada", "w2560/ca.png"],
    ["Central African Republic", "w2560/cf.png"],
    ["Chad", "w2560/td.png"],
    ["Chile", "w2560/ci.png"],
    ["China", "w2560/cn.png"],
    ["Colombia", "w2560/co.png"],
    ["Congo", "w2560/cd.png"],
    ["Cook Island", "w2560/ck.png"],
    ["Costa Rica", "w2560/cr.png"],
    ["Croatia", "w2560/hr.png"],
    ["Cuba", "w2560/cu.png"],
    ["Cyprus", "w2560/cy.png"],
    ["Czechia", "w2560/cz.png"],
    ["Republic of the Congo (Congo-Kinshasa)", "w2560/cg.png"],
    ["Denmark", "w2560/dk.png"],
    ["Djibouti", "w2560/dj.png"],
    ["Dominica", "w2560/dm.png"],
    ["Dominican Republic", "w2560/do.png"],
    ["East Timor (Timor-Leste)", ""],
    ["Ecuador", "w2560/ec.png"],
    ["Egypt", "w2560/eg.png"],
    ["El Salvador", "w2560/sv.png"],
    ["England", "w2560/gb-eng.png"],
    ["Eritrea", "w2560/er.png"],
    ["Estonia", "w2560/ee.png"],
    ["Ethiopia", "w2560/et.png"],
    ["Falkland Island", "w2560/fk.png"],
    ["Fiji", "w2560/fj.png"],
    ["Finland", "w2560/fi.png"],
    ["France", "w2560/fr.png"],
    ["French Guiana", "w2560/gf.png"],
    ["Gabon", "w2560/ga.png"],
    ["Gambia", "w2560/gm.png"],
    ["Georgia", "w2560/ge.png"],
    ["Germany", "w2560/de.png"],
    ["Ghana", "w2560/gh.png"],
    ["Gibraltar", "w2560/gi.png"],
    ["Greece", "w2560/gr.png"],
    ["Greenland", "w2560/gl.png"],
    ["Grenada", "w2560/gd.png"],
    ["Guam", "w2560/gu.png"],
    ["Guatemala", "w2560/gt.png"],
    ["Guinea", "w2560/gn.png"],
    ["Guinea-Bissau", "w2560/gw.png"],
    ["Guyana", "w2560/gy.png"],
    ["Haiti", "w2560/ht.png"],
    ["Hong kong", "w2560/hk.png"],
    ["Honduras", "w2560/hn.png"],
    ["Hungary", "w2560/hu.png"],
    ["Iceland", "w2560/is.png"],
    ["India", "w2560/in.png"],
    ["Indonesia", "w2560/id.png"],
    ["Iran", "w2560/ir.png"],
    ["Iraq", "w2560/iq.png"],
    ["Ireland", "w2560/ie.png"],
    ["Isle of man", "w2560/im.png"],
    ["Israel", "w2560/il.png"],
    ["Italy", "w2560/it.png"],
    ["Ivory Coast", "w2560/ci.png"],
    ["Jamaica", "w2560/jm.png"],
    ["Japan", "w2560/jp.png"],
    ["Jordan", "w2560/jo.png"],
    ["Kazakhstan", "w2560/kz.png"],
    ["Kenya", "w2560/ke.png"],
    ["Kiribati", "w2560/ki.png"],
    ["Kuwait", "w2560/kw.png"],
    ["Kyrgyzstan", "w2560/kg.png"],
    ["Laos", "w2560/la.png"],
    ["Latvia", "w2560/lv.png"],
    ["Lebanon", "w2560/lb.png"],
    ["Lesotho", "w2560/ls.png"],
    ["Liberia", "w2560/lr.png"],
    ["Libya", "w2560/ly.png"],
    ["Liechtenstein", "w2560/li.png"],
    ["Lithuania", "w2560/lt.png"],
    ["Luxembourg", "w2560/lu.png"],
    ["Macao", "w2560/mo.png"],
    ["Madagascar", "w2560/mg.png"],
    ["Malawi", "w2560/mw.png"],
    ["Malaysia", "w2560/my.png"],
    ["Maldives", "w2560/mv.png"],
    ["Mali", "w2560/ml.png"],
    ["Malta", "w2560/mt.png"],
    ["Marshall Islands", "w2560/mh.png"],
    ["Mauritania", "w2560/mr.png"],
    ["Mauritius", "w2560/mu.png"],
    ["Mexico", "w2560/mx.png"],
    ["Moldova", "w2560/md.png"],
    ["Monaco", "w2560/mc.png"],
    ["Mongolia", "w2560/mn.png"],
    ["Montenegro", "w2560/me.png"],
    ["Morocco", "w2560/ma.png"],
    ["Mozambique", "w2560/mz.png"],
    ["Myanmar Burma", "w2560/mm.png"],
    ["Namibia", "w2560/na.png"],
    ["Nauru", "w2560/nr.png"],
    ["Nepal", "w2560/np.png"],
    ["Netherlands", "w2560/nl.png"],
    ["New Zealand", "w2560/nz.png"],
    ["Nicaragua", "w2560/ni.png"],
    ["Niger", "w2560/ne.png"],
    ["Nigeria", "w2560/ng.png"],
    ["North Korea", "w2560/kp.png"],
    ["North Macedonia", "w2560/mk.png"],
    ["Norway", "w2560/no.png"],
    ["Oman", "w2560/om.png"],
    ["Pakistan", "w2560/pk.png"],
    ["Palau", "w2560/pw.png"],
    ["Palestine", "w2560/ps.png"],
    ["Panama", "w2560/pa.png"],
    ["Papua New Guinea", "w2560/pg.png"],
    ["Paraguay", "w2560/py.png"],
    ["Peru", "w2560/pe.png"],
    ["Philippines", "w2560/pg.png"],
    ["Poland", "w2560/pl.png"],
    ["Portugal", "w2560/pt.png"],
    ["Puerto Rico", "w2560/pr.png"],
    ["Qatar", "w2560/qa.png"],
    ["Romania", "w2560/ro.png"],
    ["Russia", "w2560/ru.png"],
    ["Rwanda", "w2560/rw.png"],
    ["Saint Kitts and Nevis", ""],
    ["Saint Lucia", "w2560/lc.png"],
    ["Samoa", "w2560/ws.png"],
    ["San Marino", "w2560/sm.png"],
    ["Sao Tome", "w2560/st.png"],
    ["Saudi Arabia", "w2560/sa.png"],
    ["Senegal", "w2560/sn.png"],
    ["Serbia", "w2560/rs.png"],
    ["Seychelles", "w2560/sc.png"],
    ["Sierra Leone", "w2560/sl.png"],
    ["Singapore", "w2560/sg.png"],
    ["Slovakia", "w2560/sk.png"],
    ["Slovenia", "w2560/si.png"],
    ["Solomon Islands", "w2560/sb.png"],
    ["Somalia", "w2560/so.png"],
    ["South Africa", "w2560/za.png"],
    ["South Korea", "w2560/kr.png"],
    ["South Sudan", "w2560/ss.png"],
    ["Spain", "w2560/es.png"],
    ["Sri Lanka", "w2560/lk.png"],
    ["Sudan", "w2560/sd.png"],
    ["Suriname", "w2560/sr.png"],
    ["Sweden", "w2560/se.png"],
    ["Switzerland", "w2560/ch.png"],
    ["Syria", "w2560/sy.png"],
    ["Taiwan", "w2560/tw.png"],
    ["Tajikistan", "w2560/tj.png"],
    ["Tanzania", "w2560/tz.png"],
    ["Thailand", "w2560/th.png"],
    ["Togo", "w2560/tg.png"],
    ["Tonga", "w2560/to.png"],
    ["Trinidad and Tobago", "w2560/tt.png"],
    ["Tunisia", "w2560/tn.png"],
    ["Turkey", "w2560/tr.png"],
    ["Turkmenistan", "w2560/tm.png"],
    ["Tuvalu", "w2560/tv.png"],
    ["Uganda", "w2560/ug.png"],
    ["Ukraine", "w2560/ua.png"],
    ["United Arab Emirates uae", "w2560/ae.png"],
    ["United Kingdom", "w2560/gb.png"],
    ["USA", "w2560/um.png"],
    ["Uruguay", "w2560/uy.png"],
    ["Uzbekistan", "w2560/uz.png"],
    ["Vanuatu", "w2560/vu.png"],
    ["Vatican", "w2560/va.png"],
    ["Venezuela", "w2560/ve.png"],
    ["Vietnam", "w2560/vn.png"],
    ["Yemen", "w2560/ye.png"],
    ["Zambia", "w2560/zm.png"],
    ["Zimbabwe", "w2560/zw.png"],
    ["Wales", "w2560/gb-wls-png"]
]);

const euFlagMap = new Map([ 
    ["Albania", "w2560/al.png"],
    ["Andorra", "w2560/ad.png"],
    ["Austria", "w2560/at.png"],
    ["Belarus", "w2560/by.png"],
    ["Belgium", "w2560/be.png"],
    ["Bosnia and Herzegovina", "w2560/ba.png"],
    ["Bulgaria", "w2560/bg.png"],
    ["Croatia", "w2560/hr.png"],
    ["Czechia", "w2560/cz.png"],
    ["Denmark", "w2560/dk.png"],
    ["England", "w2560/gb-eng.png"],
    ["Estonia", "w2560/ee.png"],
    ["Finland", "w2560/fi.png"],
    ["France", "w2560/fr.png"],
    ["Germany", "w2560/de.png"],
    ["Greece", "w2560/gr.png"],
    ["Hungary", "w2560/hu.png"],
    ["Iceland", "w2560/is.png"],
    ["Ireland", "w2560/ie.png"],
    ["Italy", "w2560/it.png"],
    ["Latvia", "w2560/lv.png"],
    ["Liechtenstein", "w2560/li.png"],
    ["Lithuania", "w2560/lt.png"],
    ["Luxembourg", "w2560/lu.png"],
    ["Malta", "w2560/mt.png"],
    ["Moldova", "w2560/md.png"],
    ["Monaco", "w2560/mc.png"],
    ["Montenegro", "w2560/me.png"],
    ["Netherlands", "w2560/nl.png"],
    ["North Macedonia", "w2560/mk.png"],
    ["Norway", "w2560/no.png"],
    ["Poland", "w2560/pl.png"],
    ["Portugal", "w2560/pt.png"],
    ["Romania", "w2560/ro.png"],
    ["Russia", "w2560/ru.png"],
    ["San Marino", "w2560/sm.png"],
    ["Serbia", "w2560/rs.png"],
    ["Slovakia", "w2560/sk.png"],
    ["Slovenia", "w2560/si.png"],
    ["Spain", "w2560/es.png"],
    ["Sweden", "w2560/se.png"],
    ["Switzerland", "w2560/ch.png"],
    ["Turkey", "w2560/tr.png"],
    ["Ukraine", "w2560/ua.png"],
    ["United Kingdom", "w2560/gb.png"],   
]);

const afFlagMap = new Map([
    ["Algeria", "w2560/dz.png"],
    ["Angola", "w2560/ao.png"],
    ["Benin", "w2560/bj.png"],
    ["Botswana", "w2560/bw.png"],
    ["Burkina Faso", "w2560/bf.png"],
    ["Burundi", "w2560/bi.png"],
    ["Cabo Verde", "w2560/cv.png"],
    ["Cameroon", "w2560/cm.png"],
    ["Central African Republic", "w2560/cf.png"],
    ["Chad", "w2560/td.png"],
    ["Congo", "w2560/cd.png"],
    ["Republic of the Congo (Congo-Kinshasa)", "w2560/cg.png"],
    ["Djibouti", "w2560/dj.png"],
    ["Egypt", "w2560/eg.png"],
    ["Eritrea", "w2560/er.png"],
    ["Ethiopia", "w2560/et.png"],
    ["Gabon", "w2560/ga.png"],
    ["Gambia", "w2560/gm.png"],
    ["Ghana", "w2560/gh.png"],
    ["Guinea", "w2560/gn.png"],
    ["Guinea-Bissau", "w2560/gw.png"],
    ["Kenya", "w2560/ke.png"],
    ["Lesotho", "w2560/ls.png"],
    ["Liberia", "w2560/lr.png"],
    ["Libya", "w2560/ly.png"],
    ["Madagascar", "w2560/mg.png"],
    ["Malawi", "w2560/mw.png"],
    ["Mali", "w2560/ml.png"],
    ["Mauritania", "w2560/mr.png"],
    ["Mauritius", "w2560/mu.png"],
    ["Morocco", "w2560/ma.png"],
    ["Mozambique", "w2560/mz.png"],
    ["Namibia", "w2560/na.png"],
    ["Niger", "w2560/ne.png"],
    ["Nigeria", "w2560/ng.png"],
    ["Rwanda", "w2560/rw.png"],
    ["Sao Tome", "w2560/st.png"],
    ["Senegal", "w2560/sn.png"],
    ["Seychelles", "w2560/sc.png"],
    ["Sierra Leone", "w2560/sl.png"],
    ["Somalia", "w2560/so.png"],
    ["South Africa", "w2560/za.png"],
    ["South Sudan", "w2560/ss.png"],
    ["Sudan", "w2560/sd.png"],
    ["Tanzania", "w2560/tz.png"],
    ["Togo", "w2560/tg.png"],
    ["Tunisia", "w2560/tn.png"],
    ["Uganda", "w2560/ug.png"],
    ["Zambia", "w2560/zm.png"],
    ["Zimbabwe", "w2560/zw.png"]
]);

const asFlagMap = new Map([
    ["Afghanistan", "w2560/af.png"],
    ["Armenia", "w2560/am.png"],
    ["Azerbaijan", "w2560/az.png"],
    ["Bahrain", "w2560/bh.png"],
    ["Bangladesh", "w2560/bd.png"],
    ["Bhutan", "w2560/bt.png"],
    ["Brunei", "w2560/bn.png"],
    ["Cambodia", "w2560/kh.png"],
    ["China", "w2560/cn.png"],
    ["Cyprus", "w2560/cy.png"],
    ["Georgia", "w2560/ge.png"],
    ["India", "w2560/in.png"],
    ["Indonesia", "w2560/id.png"],
    ["Iran", "w2560/ir.png"],
    ["Iraq", "w2560/iq.png"],
    ["Israel", "w2560/il.png"],
    ["Japan", "w2560/jp.png"],
    ["Jordan", "w2560/jo.png"],
    ["Kazakhstan", "w2560/kz.png"],
    ["Kuwait", "w2560/kw.png"],
    ["Kyrgyzstan", "w2560/kg.png"],
    ["Laos", "w2560/la.png"],
    ["Lebanon", "w2560/lb.png"],
    ["Malaysia", "w2560/my.png"],
    ["Maldives", "w2560/mv.png"],
    ["Mongolia", "w2560/mn.png"],
    ["Myanmar Burma", "w2560/mm.png"],
    ["Nepal", "w2560/np.png"],
    ["North Korea", "w2560/kp.png"],
    ["Oman", "w2560/om.png"],
    ["Pakistan", "w2560/pk.png"],
    ["Palestine", "w2560/ps.png"],
    ["Philippines", "w2560/pg.png"],
    ["Qatar", "w2560/qa.png"],
    ["Russia", "w2560/ru.png"],
    ["Saudi Arabia", "w2560/sa.png"],
    ["Singapore", "w2560/sg.png"],
    ["South Korea", "w2560/kr.png"],
    ["Sri Lanka", "w2560/lk.png"],
    ["Syria", "w2560/sy.png"],
    ["Taiwan", "w2560/tw.png"],
    ["Tajikistan", "w2560/tj.png"],
    ["Thailand", "w2560/th.png"],
    ["Turkey", "w2560/tr.png"],
    ["Turkmenistan", "w2560/tm.png"],
    ["United Arab Emirates uae", "w2560/ae.png"],
    ["Uzbekistan", "w2560/uz.png"],
    ["Vietnam", "w2560/vn.png"],
    ["Yemen", "w2560/ye.png"]
]);

function getRandomCountryFlag() {
    let keys = Array.from(countryFlagMap.keys());
    let randomIndex = Math.floor(Math.random() * keys.length);
    let randomCountry = keys[randomIndex];
    let randomFlag = countryFlagMap.get(randomCountry);
    return { country: randomCountry, flag: randomFlag };
} 

function getRandomEuropeFlag(){
    let keys = Array.from(euFlagMap.keys());
    let randomIndex = Math.floor(Math.random() * keys.length);
    let randomEuCountry = keys[randomIndex];
    let randomEuFlag = euFlagMap.get(randomEuCountry);
    return { country: randomEuCountry, flag: randomEuFlag };
}

function getRandomAfricanFlag() {
    let keys = Array.from(afFlagMap.keys());
    let randomIndex = Math.floor(Math.random() * keys.length);
    let randomCountry = keys[randomIndex];
    let randomFlag = afFlagMap.get(randomCountry);
    return { country: randomCountry, flag: randomFlag };
}

function getRandomAsianFlag() {
    let keys = Array.from(asFlagMap.keys());
    let randomIndex = Math.floor(Math.random() * keys.length);
    let randomCountry = keys[randomIndex];
    let randomFlag = asFlagMap.get(randomCountry);
    return { country: randomCountry, flag: randomFlag };
}
