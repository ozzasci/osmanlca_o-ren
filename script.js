// Kelime Listesi
const kelimeler = {
    "Azimet": { anlam: "Gitmek", osmanlica: "عزيمت", ipucu: "Köyden azimet etti." },
    "Kıyam": { anlam: "Başlamak", osmanlica: "قيام", ipucu: "Sabah kıyam etti." },
    "Bârü": { anlam: "Duvar", osmanlica: "بارو", ipucu: "Kale bârüsü sağlamdı." },
    "Tekarrüb": { anlam: "Yaklaşmak", osmanlica: "تقرب", ipucu: "Cümlede: 'Düşmana tekarrüb etti.'" },
    "Metânet": { anlam: "Dayanıklılık", osmanlica: "متانت", ipucu: "Cümlede: 'Metânetini korudu.'" },
    "Nüzül": { anlam: "İnmek", osmanlica: "نزول", ipucu: "Cümlede: 'Dağdan nüzül etti.'" },
    "Cümle": { anlam: "Bütün, tamamı", osmanlica: "جمله", ipucu: "Cümlede: 'Cümle işler tamamlandı.'" },
    "Ümerâ": { anlam: "Emirler, sancakbeyleri", osmanlica: "امرا", ipucu: "Cümlede: 'Ümerâ toplantıya katıldı.'" },
    "Mir-i mirân": { anlam: "Beylerbeyi", osmanlica: "مير مران", ipucu: "Cümlede: 'Mir-i mirân orduyu yönetti.'" },
    "Kibâr": { anlam: "Büyükler, önde gelenler", osmanlica: "كبار", ipucu: "Cümlede: 'Kibâr ziyafete geldi.'" },
    "Muhtâr": { anlam: "Seçilmiş, seçkin", osmanlica: "مختار", ipucu: "Cümlede: 'Muhtâr kişi ödüllendirildi.'" },
    "İhtiyâr": { anlam: "Kıdemli", osmanlica: "اختيار", ipucu: "Cümlede: 'İhtiyâr adam söz aldı.'" },
    "Müşâvere": { anlam: "Danışmak", osmanlica: "مشاوره", ipucu: "Cümlede: 'Karar için müşâvere etti.'" },
    "Cem' olmak": { anlam: "Toplanmak", osmanlica: "جمع اولمق", ipucu: "Cümlede: 'Halk cem' oldu.'" },
    "Kemâl mertebe": { anlam: "Aşırı derecede", osmanlica: "كمال مرتبه", ipucu: "Cümlede: 'Kemâl mertebe yoruldu.'" },
    "Suübet": { anlam: "Zorluk", osmanlica: "صعوبت", ipucu: "Cümlede: 'Suübet çekti.'" },
    "Mukarrer olmak": { anlam: "Açık, ortada olmak", osmanlica: "مقرر اولمق", ipucu: "Cümlede: 'Hata mukarrer oldu.'" },
 "Tahrib": { anlam: "Zarar vermek", osmanlica: "تخريب", ipucu: "Cümlede: 'Köye tahrib etti.'" },
    "Bilâd": { anlam: "Beldeler, şehirler", osmanlica: "بلاد", ipucu: "Cümlede: 'Bilâd gezdi.'" },
    "Ta'zib": { anlam: "Acı çektirmek", osmanlica: "تعذيب", ipucu: "Cümlede: 'Düşmana ta'zib etti.'" },
    "Küffâr": { anlam: "Kâfirler, düşmanlar", osmanlica: "كفار", ipucu: "Cümlede: 'Küffâr ile savaştı.'" },
    "Bed-nihâd": { anlam: "Kötü huylu", osmanlica: "بد نهاد", ipucu: "Cümlede: 'Bed-nihâd biriydi.'" },
    "Teveccüh": { anlam: "Yönelmek", osmanlica: "توجه", ipucu: "Cümlede: 'Halka teveccüh etti.'" },
    "Kasabât": { anlam: "Kasabalar", osmanlica: "قصبات", ipucu: "Cümlede: 'Kasabâtı dolaştı.'" },
    "Kurâ": { anlam: "Karyeler, köyler", osmanlica: "قرى", ipucu: "Cümlede: 'Kurâda kaldı.'" },
    "Bikâ'": { anlam: "Buk'alar, yerler, ülkeler", osmanlica: "بقاع", ipucu: "Cümlede: 'Bikâ'ları gezdi.'" },
    "Zıyâ'": { anlam: "Zay'alar, tarlalar", osmanlica: "زياع", ipucu: "Cümlede: 'Zıyâ'da çalıştı.'" },
    "Gâret": { anlam: "Yağma", osmanlica: "غارت", ipucu: "Cümlede: 'Köyü gâret etti.'" },
    "Hasâret": { anlam: "Hasar verme", osmanlica: "خسارت", ipucu: "Cümlede: 'Malına hasâret etti.'" },
    "Galebe": { anlam: "Üstünlük", osmanlica: "غلبه", ipucu: "Cümlede: 'Savaşta galebe çaldı.'" },
    "Nusret": { anlam: "(İlahi) Yardım", osmanlica: "نصرت", ipucu: "Cümlede: 'Nusret buldu.'" },
    "A'dâ": { anlam: "Düşmanlar", osmanlica: "اعداء", ipucu: "Cümlede: 'A'dâ ile karşılaştı.'" },
    "Müris": { anlam: "Getiren, neden olan", osmanlica: "مورث", ipucu: "Cümlede: 'Hastalık müris oldu.'" },
    "İllâ": { anlam: "Ancak, ... hariç", osmanlica: "الا", ipucu: "Cümlede: 'İllâ o gelmedi.'" },
    "Re'y": { anlam: "Görüş, kanaat", osmanlica: "رأى", ipucu: "Cümlede: 'Re'yini bildirdi.'" },
    "Kabza": { anlam: "El, hâkimiyet", osmanlica: "قبضه", ipucu: "Cümlede: 'Kabzasına aldı.'" },
    "Tasarruf": { anlam: "Kullanma, sahip olma", osmanlica: "تصرف", ipucu: "Cümlede: 'Malı tasarruf etti.'" },
    "Yardım": { anlam: "Dönen, kalan", osmanlica: "يارديم", ipucu: "Cümlede: 'Yardım mal bıraktı.'" },
    "Mümânaat": { anlam: "Engelleme", osmanlica: "ممانعت", ipucu: "Cümlede: 'Girişi mümânaat etti.'" },
    "Menzil": { anlam: "Konak", osmanlica: "منزل", ipucu: "Cümlede: 'Menzilde durdu.'" },
    "Abd-i Faki'r": { anlam: "Aciz kul, yazarın kendisi", osmanlica: "عبد فقير", ipucu: "Cümlede: 'Abd-i faki'r yazdı.'" },
    "Kalile": { anlam: "Az", osmanlica: "قليله", ipucu: "Cümlede: 'Kalile yemek yedi.'" },
    "İrkilmek": { anlam: "Toplanmak", osmanlica: "اركيلمك", ipucu: "Cümlede: 'Halk irkilmek etti.'" },
    "Meremmet": { anlam: "Tamir", osmanlica: "مرمت", ipucu: "Cümlede: 'Evi meremmet etti.'" },
    "Ba'id": { anlam: "Uzak", osmanlica: "بعيد", ipucu: "Cümlede: 'Ba'id bir yere gitti.'" },
    "Ratıb": { anlam: "Yumuşak", osmanlica: "راتب", ipucu: "Cümlede: 'Ratıb bir kumaş aldı.'" },
    "Yâbis": { anlam: "Kuru, sert", osmanlica: "يابس", ipucu: "Cümlede: 'Yâbis ekmek yedi.'" },
    "Câri olmak": { anlam: "Akmak", osmanlica: "جاري اولمق", ipucu: "Cümlede: 'Su câri oldu.'" },
    "Halk": { anlam: "Yaratmak", osmanlica: "خلق", ipucu: "Cümlede: 'Allah halk etti.'" },
    "Aklâm": { anlam: "Kalemler", osmanlica: "اقلام", ipucu: "Cümlede: 'Aklâm ile yazdı.'" },
    "Kâbil": { anlam: "Mümkün, olabilir", osmanlica: "قابل", ipucu: "Cümlede: 'Bu kâbil mi?'" },
    "Sa'b": { anlam: "Zor", osmanlica: "صعب", ipucu: "Cümlede: 'Sa'b bir iş yaptı.'" },
    "Mürür": { anlam: "Geçmek", osmanlica: "مرور", ipucu: "Cümlede: 'Zaman mürür etti.'" },
    "Sengistân": { anlam: "Taşlık yer", osmanlica: "سنگستان", ipucu: "Cümlede: 'Sengistânda yürüdü.'" },
    "Dağıstân": { anlam: "Dağlık yer", osmanlica: "داغستان", ipucu: "Cümlede: 'Dağıstâna gitti.'" },
    "Ubür": { anlam: "Geçmek", osmanlica: "عبور", ipucu: "Cümlede: 'Köprüden ubür etti.'" },
    "İhzâr": { anlam: "Hazırlamak", osmanlica: "احضار", ipucu: "Cümlede: 'Yemeği ihzâr etti.'" },
    "Câmüs": { anlam: "Manda", osmanlica: "جاموس", ipucu: "Cümlede: 'Câmüs ile tarla sürdü.'" },
    "Azim": { anlam: "Büyük", osmanlica: "عظيم", ipucu: "Cümlede: 'Azim bir kale yaptı.'" },
    "İhdâs etmek": { anlam: "Ortaya çıkmak", osmanlica: "احداث اتمك", ipucu: "Cümlede: 'Sorun ihdâs etti.'" },
    "Mübâşeret": { anlam: "Bir işe başlama, girişme", osmanlica: "مباشرت", ipucu: "Cümlede: 'İşe mübâşeret etti.'" },
    "Muhkem": { anlam: "İyice, sıkıca", osmanlica: "محكم", ipucu: "Cümlede: 'Kapıyı muhkem kapadı.'" },
    "Müctemi' olmak": { anlam: "Toplanmak", osmanlica: "مجتمع اولمق", ipucu: "Cümlede: 'Halk müctemi' oldu.'" },
    "Âsâr": { anlam: "Eserler, izler, emâreler", osmanlica: "آثار", ipucu: "Cümlede: 'Âsâr buldu.'" },
    "Subh": { anlam: "Sabah", osmanlica: "صبح", ipucu: "Cümlede: 'Subh vakti kalktı.'" },
    "Zâhir olmak": { anlam: "Ortaya çıkmak", osmanlica: "ظاهر اولمق", ipucu: "Cümlede: 'Hakikat zâhir oldu.'" },
    "Vâhid": { anlam: "Bir", osmanlica: "واحد", ipucu: "Cümlede: 'Vâhid elma aldı.'" },
    "Zemin": { anlam: "Yeryüzü", osmanlica: "زمين", ipucu: "Cümlede: 'Zemin üzerinde yürüdü.'" },
    "Guzât": { anlam: "Gaziler", osmanlica: "غزاة", ipucu: "Cümlede: 'Guzât savaşta bulundu.'" },
    "Bir uğurdan": { anlam: "Hep birlikte", osmanlica: "بر اوغوردان", ipucu: "Cümlede: 'Bir uğurdan geldi.'" },
    "Tiğ": { anlam: "Kılıç", osmanlica: "تيغ", ipucu: "Cümlede: 'Tiğ ile vurdu.'" },
    "Diriğ": { anlam: "Esirgeme", osmanlica: "دريغ", ipucu: "Cümlede: 'Yardımı diriğ etti.'" },
    "Hod": { anlam: "Kendi", osmanlica: "خود", ipucu: "Cümlede: 'Hod başına yaptı.'" },
    "Levâzım": { anlam: "Lazım olanlar", osmanlica: "لوازم", ipucu: "Cümlede: 'Levâzım aldı.'" },
    "Vech": { anlam: "Yüz", osmanlica: "وجه", ipucu: "Cümlede: 'Vechi parladı.'" },
    "Farazâ": { anlam: "Tutalım ki, diyelim ki", osmanlica: "فرضا", ipucu: "Cümlede: 'Farazâ o gelsin.'" },
    "Duhül": { anlam: "Girme", osmanlica: "دخول", ipucu: "Cümlede: 'Eve duhül etti.'" },
    "Şimşir": { anlam: "Kılıç", osmanlica: "شمشير", ipucu: "Cümlede: 'Şimşir ile kesti.'" },
    "Bâz": { anlam: "Oyun", osmanlica: "باز", ipucu: "Cümlede: 'Bâz oynadı.'" },
    "Halâs olmak": { anlam: "Kurtulmak", osmanlica: "خلاص اولمق", ipucu: "Cümlede: 'Esaretten halâs oldu.'" },
    "Dildâr": { anlam: "Gönül alma", osmanlica: "دلدار", ipucu: "Cümlede: 'Dildâr bir söz söyledi.'" },
    "Bevâr": { anlam: "Yok olma, çürüme", osmanlica: "بوار", ipucu: "Cümlede: 'Mal bevâr oldu.'" },
    "Fi'l-hâl": { anlam: "Hemen, o anda", osmanlica: "في الحال", ipucu: "Cümlede: 'Fi'l-hâl geldi.'" },
    "Azim olmak": { anlam: "Gitmek", osmanlica: "عظيم اولمق", ipucu: "Cümlede: 'Köye azim oldu.'" },
    "Cahim": { anlam: "Cehennem", osmanlica: "جحيم", ipucu: "Cümlede: 'Cahime düştü.'" },
    "Lâşe": { anlam: "Leş", osmanlica: "لاشه", ipucu: "Cümlede: 'Lâşe buldu.'" },
    "İnâyet": { anlam: "(İlahi) Yardım", osmanlica: "عنايت", ipucu: "Cümlede: 'İnâyet buldu.'" },
    "Mel'ün": { anlam: "Alçak", osmanlica: "ملعون", ipucu: "Cümlede: 'Mel'ün bir adamdı.'" },
    "Za'f": { anlam: "Güçsüzlük, zaafiyet", osmanlica: "ضعف", ipucu: "Cümlede: 'Za'f gösterdi.'" },
    "Fütür": { anlam: "Zayıflık, gevşeklik", osmanlica: "فتور", ipucu: "Cümlede: 'Fütür hissetti.'" },
    "Rüz": { anlam: "Gündüz", osmanlica: "روز", ipucu: "Cümlede: 'Rüz vakti çalıştı.'" },
    "Şeb": { anlam: "Gece", osmanlica: "شب", ipucu: "Cümlede: 'Şeb uyudu.'" },
    "Kemâl": { anlam: "Tam, bütün, hepsi", osmanlica: "كمال", ipucu: "Cümlede: 'Kemâl iş bitti.'" },
    "Avn": { anlam: "Yardım", osmanlica: "عون", ipucu: "Cümlede: 'Avn buldu.'" },
    "Zuhüra gelmek": { anlam: "Ortaya çıkmak, belirmek", osmanlica: "ظهورا گلمك", ipucu: "Cümlede: 'Hakikat zuhüra geldi.'" },
    "Nâ-tüvân": { anlam: "Güçsüz, zayıf", osmanlica: "نا توان", ipucu: "Cümlede: 'Nâ-tüvân kaldı.'" },
    "Add olunmak": { anlam: "Sayılmak", osmanlica: "عد اولونمق", ipucu: "Cümlede: 'Yiğit add olundu.'" },
    "Şir": { anlam: "Arslan", osmanlica: "شير", ipucu: "Cümlede: 'Şir gibi kükredi.'" },
    "Jiyân": { anlam: "Kızgın, kükremiş", osmanlica: "جيان", ipucu: "Cümlede: 'Jiyân bir hayvan gördü.'" },
    "Rüstem": { anlam: "Ünlü İran savaşçısı", osmanlica: "رستم", ipucu: "Cümlede: 'Rüstem gibi dövüştü.'" },
    "Tevemân": { anlam: "İkizler", osmanlica: "توأمان", ipucu: "Cümlede: 'Tevemân doğdu.'" },
    "Be-gâyet": { anlam: "Aşırı derecede, çokça", osmanlica: "بغايت", ipucu: "Cümlede: 'Be-gâyet yoruldu.'" },
    "İhtimâm": { anlam: "Titizlenme, önemseme", osmanlica: "احتمام", ipucu: "Cümlede: 'İşe ihtimâm gösterdi.'" },
    "Terakki": { anlam: "İlerletme, zamlandırma", osmanlica: "ترقي", ipucu: "Cümlede: 'Maaşı terakki etti.'" },
    "Hüsn": { anlam: "Güzel", osmanlica: "حسن", ipucu: "Cümlede: 'Hüsn bir çiçek aldı.'" },
    "Va'de": { anlam: "Vaat verme", osmanlica: "وعده", ipucu: "Cümlede: 'Va'de etti.'" },
    "Tergib": { anlam: "İsteklendirme, coşturma", osmanlica: "ترغيب", ipucu: "Cümlede: 'Halkı tergib etti.'" },
    "Irlamak": { anlam: "Çalmak, söylemek", osmanlica: "ايرلامق", ipucu: "Cümlede: 'Şarkı ırlamak etti.'" },
    "Çoğur": { anlam: "Müzik aleti, çöğür", osmanlica: "چوغور", ipucu: "Cümlede: 'Çoğur çaldı.'" },
    "Tevhid": { anlam: "Lâ ilâhe illallah demek", osmanlica: "توحيد", ipucu: "Cümlede: 'Tevhid okudu.'" },
    "Tehlil": { anlam: "Lâ ilâhe illallah demek", osmanlica: "تهليل", ipucu: "Cümlede: 'Tehlil getirdi.'" },
    "Acib": { anlam: "Acayip, ilgi çekici", osmanlica: "عجيب", ipucu: "Cümlede: 'Acib bir şey gördü.'" },
    "Mütehayyir": { anlam: "Şaşkın, şaşırmış", osmanlica: "متحير", ipucu: "Cümlede: 'Mütehayyir kaldı.'" },
    "Mertebe": { anlam: "Derece, seviye", osmanlica: "مرتبه", ipucu: "Cümlede: 'Yüksek mertebe ulaştı.'" },
    "Temâşâ etmek": { anlam: "Seyretmek, izlemek", osmanlica: "تماشا اتمك", ipucu: "Cümlede: 'Manzarayı temâşâ etti.'" },
    "Ma'hüd": { anlam: "Sözü geçen, mezkûr", osmanlica: "مع‌هود", ipucu: "Cümlede: 'Ma'hüd adam geldi.'" },
    "Suüd etmek": { anlam: "Çıkmak", osmanlica: "صعود اتمك", ipucu: "Cümlede: 'Dağa suüd etti.'" },
    "Melâ'in": { anlam: "Melunlar, alçaklar", osmanlica: "ملاعين", ipucu: "Cümlede: 'Melâ'in kaçtı.'" },
    "Def' etmek": { anlam: "Savuşturmak, kovalamak", osmanlica: "دفع اتمك", ipucu: "Cümlede: 'Düşmanı def' etti.'" },
    "Hin": { anlam: "Zaman, vakit", osmanlica: "حين", ipucu: "Cümlede: 'O hin geldi.'" },
    "Vaz'": { anlam: "Koymak", osmanlica: "وضع", ipucu: "Cümlede: 'Taşı vaz' etti.'" },
    "Kadem": { anlam: "Ayak", osmanlica: "قدم", ipucu: "Cümlede: 'Kadem bastı.'" },
    "İşrâk vakti": { anlam: "Güneşin doğduğu an", osmanlica: "اشراق وقتي", ipucu: "Cümlede: 'İşrâk vakti uyandı.'" },
    "Minvâl": { anlam: "Şekil, tarz, üslup", osmanlica: "منوال", ipucu: "Cümlede: 'Minvâl üzere yazdı.'" },
    "Güzerân etmek": { anlam: "Geçmek", osmanlica: "گذران اتمك", ipucu: "Cümlede: 'Zaman güzerân etti.'" },
    "Dilir": { anlam: "Yürekli, cesur, yiğit", osmanlica: "دلير", ipucu: "Cümlede: 'Dilir bir adamdır.'" },
    "Şipâriş": { anlam: "Tenbih, ısmarlama", osmanlica: "شپارش", ipucu: "Cümlede: 'İşi şipâriş etti.'" },
    "Kılağo": { anlam: "Parlaklık, ışıltı", osmanlica: "قلاغو", ipucu: "Cümlede: 'Kılağo bir taş buldu.'" },
    "Müşkil olmak": { anlam: "Zor olmak", osmanlica: "مشكل اولمق", ipucu: "Cümlede: 'İş müşkil oldu.'" },
    "Peyâm": { anlam: "Haber", osmanlica: "پيام", ipucu: "Cümlede: 'Peyâm gönderdi.'" },
    "İblâğ": { anlam: "Ulaştırma", osmanlica: "ابلاغ", ipucu: "Cümlede: 'Mektubu iblâğ etti.'" },
    "Kethudâyeri": { anlam: "Yeniçeri ocağının zabitlerinden ve kethudanın vekili", osmanlica: "كتخدا يري", ipucu: "Cümlede: 'Kethudâyeri görev aldı.'" },
    "Mahlüt": { anlam: "Karışık, birbirine girmiş", osmanlica: "مخلوط", ipucu: "Cümlede: 'Mahlüt bir kumaş aldı.'" },
    "İbtidâ": { anlam: "Önce, başlangıçta", osmanlica: "ابتدا", ipucu: "Cümlede: 'İbtidâ o geldi.'" },
    "Beden": { anlam: "Duvar", osmanlica: "بدن", ipucu: "Cümlede: 'Beden inşa etti.'" },
    "Ekser": { anlam: "Çok, fazla", osmanlica: "اكثر", ipucu: "Cümlede: 'Ekser halk uyudu.'" },
    "Mürr": { anlam: "Acı", osmanlica: "مر", ipucu: "Cümlede: 'Mürr bir tat aldı.'" },
    "Esfel": { anlam: "En aşağı", osmanlica: "اسفل", ipucu: "Cümlede: 'Esfel bir yere indi.'" },
    "Sâfilin": { anlam: "Aşağıdakiler, alçaklar", osmanlica: "سافلين", ipucu: "Cümlede: 'Sâfilin ile görüştü.'" },
    "İğtinâm": { anlam: "Yağma ve talan etme", osmanlica: "اغتنام", ipucu: "Cümlede: 'Malı iğtinâm etti.'" },
    "Nidâ olunmak": { anlam: "Çağrılmak", osmanlica: "ندا اولونمق", ipucu: "Cümlede: 'Nidâ olundu.'" },
    "Müzâhame": { anlam: "Kalabalıklaşma", osmanlica: "مزاحمه", ipucu: "Cümlede: 'Yolda müzâhame oldu.'" },
    "Nısf": { anlam: "Yarı", osmanlica: "نصف", ipucu: "Cümlede: 'Nısfını yedi.'" },
    "Leyl": { anlam: "Gece", osmanlica: "ليل", ipucu: "Cümlede: 'Leyl vakti uyudu.'" },
    "Mukaddem": { anlam: "Önce", osmanlica: "مقدم", ipucu: "Cümlede: 'Mukaddem o geldi.'" },
    "Vire": { anlam: "Anlaşarak teslim etme", osmanlica: "ويره", ipucu: "Cümlede: 'Kale vire ile alındı.'" },
    "Ahvâl": { anlam: "Haller, durumlar", osmanlica: "احوال", ipucu: "Cümlede: 'Ahvâlini sordu.'" },
    "Meserret": { anlam: "Sevinme, sevinç", osmanlica: "مسرت", ipucu: "Cümlede: 'Meserret duydu.'" },
    "Sem'": { anlam: "İşitme, kulak", osmanlica: "سمع", ipucu: "Cümlede: 'Sem' ile dinledi.'" },
    "Hâlık": { anlam: "Yaratıcı, yaratan", osmanlica: "خالق", ipucu: "Cümlede: 'Hâlık her şeyi yarattı.'" },
    "Bi-çün": { anlam: "Sebep sorulmaz, Allah", osmanlica: "بچون", ipucu: "Cümlede: 'Bi-çün yaptı.'" },
    "Tebşir": { anlam: "Müjdeleme, haber verme", osmanlica: "تبشير", ipucu: "Cümlede: 'Zaferi tebşir etti.'" },
    "Tehâlük": { anlam: "Çırpınma, çok isteme", osmanlica: "تهالك", ipucu: "Cümlede: 'Mal için tehâlük etti.'" },
    "İltimâs": { anlam: "Kayırma, rica bulunma", osmanlica: "التيماس", ipucu: "Cümlede: 'İltimâs etti.'" },
    "Haml etmek": { anlam: "Yormak", osmanlica: "حمل اتمك", ipucu: "Cümlede: 'İşi haml etti.'" },
    "Tevakkuf": { anlam: "Durmak", osmanlica: "توقف", ipucu: "Cümlede: 'Yolda tevakkuf etti.'" },
    "Avâz etmek": { anlam: "Seslenmek", osmanlica: "آواز اتمك", ipucu: "Cümlede: 'Avâz etti.'" },
    "Seher vakti": { anlam: "Tan yeri ağarmadan önce", osmanlica: "سحر وقتي", ipucu: "Cümlede: 'Seher vakti kalktı.'" },
    "Mahsür": { anlam: "Kuşatılmış", osmanlica: "محصور", ipucu: "Cümlede: 'Kale mahsür oldu.'" },
    "Rüzi": { anlam: "Nasip, kısmet", osmanlica: "روزي", ipucu: "Cümlede: 'Rüzi buldu.'" },
    "Giriftâr": { anlam: "Girmek, düşmek", osmanlica: "گرفتار", ipucu: "Cümlede: 'Borçta giriftâr oldu.'" },
    "Azâd etmek": { anlam: "Serbest bırakmak", osmanlica: "آزاد اتمك", ipucu: "Cümlede: 'Köleyi azâd etti.'" },
    "Şükrân": { anlam: "Teşekkür etmek", osmanlica: "شكران", ipucu: "Cümlede: 'Şükrân etti.'" },
    "Bükâ": { anlam: "Ağlamak", osmanlica: "بكاء", ipucu: "Cümlede: 'Bükâ etti.'" },
    "Zâyi' olmak": { anlam: "Yok olmak, kaybolmak", osmanlica: "ضايع اولمق", ipucu: "Cümlede: 'Mal zâyi' oldu.'" },
    "Çorbacı": { anlam: "Yeniçeri ocağı zabiti", osmanlica: "چورباجي", ipucu: "Cümlede: 'Çorbacı emri verdi.'" },
    "Miri": { anlam: "Devlete ait (hatta devlet)", osmanlica: "ميري", ipucu: "Cümlede: 'Miri mal aldı.'" },
    "Yasakçı": { anlam: "Bekçi, gözetleyici", osmanlica: "ياسقچي", ipucu: "Cümlede: 'Yasakçı nöbet tuttu.'" },
    "Sükker": { anlam: "Şeker", osmanlica: "شكر", ipucu: "Cümlede: 'Sükker yedi.'" },
    "Murabba'": { anlam: "Kare şeklinde", osmanlica: "مربع", ipucu: "Cümlede: 'Murabba' bir bahçe yaptı.'" },
    "Tafsil": { anlam: "Ayrıntılı anlatma", osmanlica: "تفصيل", ipucu: "Cümlede: 'Olayı tafsil etti.'" },
    "Asitâne": { anlam: "İstanbul", osmanlica: "آستانه", ipucu: "Cümlede: 'Asitâne'ye gitti.'" },
    "Mukayyed olmak": { anlam: "İlgilenmek", osmanlica: "مقيد اولمق", ipucu: "Cümlede: 'İşiyle mukayyed oldu.'" },
    "Peydâ etmek": { anlam: "Elde etmek", osmanlica: "پيدا اتمك", ipucu: "Cümlede: 'Malı peydâ etti.'" },
    "Hâliyâ": { anlam: "Hâlen, şu anda", osmanlica: "حاليا", ipucu: "Cümlede: 'Hâliyâ burada.'" },
    "Mütekâid": { anlam: "Emekli", osmanlica: "متقاعد", ipucu: "Cümlede: 'Mütekâid oldu.'" },
    "Maan": { anlam: "Beraberce", osmanlica: "معا", ipucu: "Cümlede: 'Maan yürüdüler.'" },
    "Koşmak": { anlam: "Refakatçi kılmak, katmak", osmanlica: "قوشمق", ipucu: "Cümlede: 'Yanına adam koşmak etti.'" },
    "Teşrif": { anlam: "Şereflendirme, gelme", osmanlica: "تشريف", ipucu: "Cümlede: 'Eve teşrif etti.'" },
    "Dârüssaâde": { anlam: "Harem", osmanlica: "دار السعاده", ipucu: "Cümlede: 'Dârüssaâde'de kaldı.'" },
    "Mülâki olmak": { anlam: "Karşılaşmak, bir araya gelmek", osmanlica: "ملاقي اولمق", ipucu: "Cümlede: 'Dost ile mülâki oldu.'" },
    "Telhis": { anlam: "Özet belge", osmanlica: "تلخيص", ipucu: "Cümlede: 'Telhis sundu.'" },
    "Lisânen": { anlam: "Sözlü olarak", osmanlica: "لسانا", ipucu: "Cümlede: 'Lisânen anlattı.'" },
    "Anda": { anlam: "Orada", osmanlica: "آنجا", ipucu: "Cümlede: 'Anda durdu.'" },
    "Hil'at": { anlam: "Elbise", osmanlica: "خلعت", ipucu: "Cümlede: 'Hil'at giydi.'" },
    "Fâhire": { anlam: "Değerli, gurur verici", osmanlica: "فاخره", ipucu: "Cümlede: 'Fâhire bir hediye aldı.'" },
    "İ'tâ": { anlam: "Hediye etmek", osmanlica: "اعطاء", ipucu: "Cümlede: 'Malı i'tâ etti.'" },
    "Piyade mukâbelecisi": { anlam: "Kapıkulu yaya askerlerinin maaş ve künye işlemlerini yapan büro", osmanlica: "پياده مقابله‌جيسي", ipucu: "Cümlede: 'Piyade mukâbelecisi maaş verdi.'" },
    "Süvâri mukâbelecisi": { anlam: "Kapıkulu sipahi ve silahtar bölükleri dışındaki süvari bölüklerin maaş ve künye işlemlerini yapan büro", osmanlica: "سواري مقابله‌جيسي", ipucu: "Cümlede: 'Süvâri mukâbelecisi görev yaptı.'" },
    "Murâdât": { anlam: "İstekler, talepler", osmanlica: "مرادات", ipucu: "Cümlede: 'Murâdâtını sundu.'" },
    "Hâcet": { anlam: "Dilek, istek", osmanlica: "حاجت", ipucu: "Cümlede: 'Hâcet diledi.'" },
    "Mansıb": { anlam: "Görev, kadro", osmanlica: "منصب", ipucu: "Cümlede: 'Mansıb aldı.'" },
    "Ma'zül": { anlam: "Görevden alınmış", osmanlica: "معزول", ipucu: "Cümlede: 'Ma'zül oldu.'" },
    "İcmâlen": { anlam: "Topluca, genel olarak", osmanlica: "اجمالا", ipucu: "Cümlede: 'İcmâlen anlattı.'" },
    "Vâki' olmak": { anlam: "Meydana gelmek", osmanlica: "واقع اولمق", ipucu: "Cümlede: 'Olay vâki' oldu.'" },
    "Sergüzeşt": { anlam: "Başından geçen", osmanlica: "سرگذشت", ipucu: "Cümlede: 'Sergüzeştini yazdı.'" },
    "İksâr olunmak": { anlam: "Tefsilata girmek", osmanlica: "اكثار اولونمق", ipucu: "Cümlede: 'Konu iksâr olundu.'" },
    "Sâlis": { anlam: "Üçüncü", osmanlica: "ثالث", ipucu: "Cümlede: 'Sâlis sırayı aldı.'" },
    "İç Hazîne": { anlam: "Hazine-i hassa; padişah hazinesi", osmanlica: "ايچ خزينه", ipucu: "Cümlede: 'İç Hazîne'den ödedi.'" },
    "Külliyyetlü": { anlam: "Çok, fazla", osmanlica: "كليت‌لو", ipucu: "Cümlede: 'Külliyyetlü mal aldı.'" },
    "Mebâliğ": { anlam: "Meblağlar, miktarlar", osmanlica: "مبالغ", ipucu: "Cümlede: 'Mebâliğ ödedi.'" },
    "Cem'": { anlam: "Toplama, biriktirme", osmanlica: "جمع", ipucu: "Cümlede: 'Malı cem' etti.'" },
    "İddihâr": { anlam: "Depolama, biriktirme", osmanlica: "ادخار", ipucu: "Cümlede: 'Yiyeceği iddihâr etti.'" },
    "Nemçe": { anlam: "Avusturya", osmanlica: "نمج", ipucu: "Cümlede: 'Nemçe ile savaştı.'" },
    "Gûne": { anlam: "Türlü, çeşit", osmanlica: "گونه", ipucu: "Cümlede: 'Gûne mal aldı.'" },
    "Muzâyaka": { anlam: "Darlık, sıkıntı, buhran", osmanlica: "مضايقه", ipucu: "Cümlede: 'Muzâyaka çekti.'" },
    "Hâdis olmak": { anlam: "İlk defa meydana gelmek", osmanlica: "حادث اولمق", ipucu: "Cümlede: 'Olay hâdis oldu.'" },
    "Misillü": { anlam: "Gibi, benzer", osmanlica: "مثلو", ipucu: "Cümlede: 'Misillü bir adam gördü.'" },
    "Evvel": { anlam: "Birinci, ilk", osmanlica: "اول", ipucu: "Cümlede: 'Evvel o geldi.'" },
    "Kâmilen": { anlam: "Tamamıyla, bütünüyle", osmanlica: "كاملا", ipucu: "Cümlede: 'Kâmilen bitti.'" },
    "Mürûr etmek": { anlam: "Geçmek", osmanlica: "مرور اتمك", ipucu: "Cümlede: 'Zaman mürûr etti.'" },
    "Mesârif": { anlam: "Masraflar, harcamalar", osmanlica: "مصارف", ipucu: "Cümlede: 'Mesârif ödedi.'" },
    "Lâzime": { anlam: "Gerekli olan", osmanlica: "لازمه", ipucu: "Cümlede: 'Lâzimeyi aldı.'" },
    "Tesviye olunmak": { anlam: "Düzeltmek, karşılanmak", osmanlica: "تسويه اولونمق", ipucu: "Cümlede: 'Borç tesviye olundu.'" },
    "Şehriyâr": { anlam: "Hükümdar, padişah", osmanlica: "شهريار", ipucu: "Cümlede: 'Şehriyâr emri verdi.'" },
    "Müşâr": { anlam: "İşaret olunan", osmanlica: "مشعر", ipucu: "Cümlede: 'Müşâr yere gitti.'" },
    "Nâmî": { anlam: "Namlı, ünlü", osmanlica: "نامي", ipucu: "Cümlede: 'Nâmî bir yiğit geldi.'" },
    "Mensûb": { anlam: "Nispet edilen, ait", osmanlica: "منسوب", ipucu: "Cümlede: 'Bu ona mensûb.'" },
    "Maa": { anlam: "Beraber", osmanlica: "مع", ipucu: "Cümlede: 'Maa yürüdü.'" },
    "Tetimmât": { anlam: "Tetimmeler, müştemilat", osmanlica: "تتمات", ipucu: "Cümlede: 'Tetimmât eklendi.'" },
    "Adem": { anlam: "Yokluk", osmanlica: "عدم", ipucu: "Cümlede: 'Adem içinde kaldı.'" },
    "Kâfî": { anlam: "Yeterli", osmanlica: "كافي", ipucu: "Cümlede: 'Bu kâfîdir.'" },
    "Güzerân": { anlam: "Geçmek", osmanlica: "گذران", ipucu: "Cümlede: 'Zaman güzerân etti.'" },
    "Râbi'": { anlam: "Dördüncü", osmanlica: "رابع", ipucu: "Cümlede: 'Râbi' sırayı aldı.'" },
    "Câlis": { anlam: "Cülus eden, oturan", osmanlica: "جالس", ipucu: "Cümlede: 'Tahta câlis oldu.'" },
    "Serîr": { anlam: "Taht, koltuk", osmanlica: "سرير", ipucu: "Cümlede: 'Serîr üzerine oturdu.'" },
    "Saltanat": { anlam: "Sultanlık, padişahlık", osmanlica: "سلطنت", ipucu: "Cümlede: 'Saltanat kurdu.'" },
    "Cülûs": { anlam: "Oturmak, tahta geçmek", osmanlica: "جلوس", ipucu: "Cümlede: 'Cülûs etti.'" },
    "Vâlide": { anlam: "Anne", osmanlica: "والده", ipucu: "Cümlede: 'Vâlidesini gördü.'" },
    "Eşkıyâ": { anlam: "Şakiler, isyancılar", osmanlica: "اشقيا", ipucu: "Cümlede: 'Eşkıyâ yakalandı.'" },
    "Taltîf": { anlam: "Ödüllendirme", osmanlica: "تطليف", ipucu: "Cümlede: 'Taltîf edildi.'" },
    "Te'yîd": { anlam: "Pekiştirme, sağlamlaştırma", osmanlica: "تأييد", ipucu: "Cümlede: 'Karar te'yîd edildi.'" },
    "Mutâlaa": { anlam: "Değerlendirme, inceleme", osmanlica: "مطالعه", ipucu: "Cümlede: 'Kitabı mutâlaa etti.'" },
    "Hazâin": { anlam: "Hazineler", osmanlica: "خزائن", ipucu: "Cümlede: 'Hazâin doldu.'" },
    "Bugāt": { anlam: "Bagiler, isyancılar", osmanlica: "بغاة", ipucu: "Cümlede: 'Bugāt bastırıldı.'" },
    "İbzâl": { anlam: "Bolca harcama", osmanlica: "ابزال", ipucu: "Cümlede: 'Malı ibzâl etti.'" },
    "İsrâf": { anlam: "Bolca harcama", osmanlica: "اسراف", ipucu: "Cümlede: 'İsrâf etti.'" },
    "Nukūd": { anlam: "Nakit paralar", osmanlica: "نقود", ipucu: "Cümlede: 'Nukūd ödedi.'" },
    "Müddehara": { anlam: "Biriktirilen", osmanlica: "مدخره", ipucu: "Cümlede: 'Müddehara mal aldı.'" },
    "Telef olma": { anlam: "Yok olmak", osmanlica: "تلف اولمك", ipucu: "Cümlede: 'Mal telef oldu.'" },
    "Mebnî": { anlam: "İçin, dolayı", osmanlica: "مبني", ipucu: "Cümlede: 'Bu mebnî geldi.'" },
    "Tüccâr": { anlam: "Tacirler, ticaret yapanlar", osmanlica: "تجار", ipucu: "Cümlede: 'Tüccâr ile görüştü.'" },
    "Mütemevvilîn": { anlam: "Çok parası olanlar", osmanlica: "متمولين", ipucu: "Cümlede: 'Mütemevvilîn yardım etti.'" },
    "İstidâne": { anlam: "Borçlanma", osmanlica: "استدانه", ipucu: "Cümlede: 'İstidâne etti.'" },
    "Selâtîn": { anlam: "Sultanlar, padişahlar", osmanlica: "سلاطين", ipucu: "Cümlede: 'Selâtîn toplandı.'" },
    "Mâzıye": { anlam: "Geçen, önceki", osmanlica: "ماضيه", ipucu: "Cümlede: 'Mâzıye baktı.'" },
    "Sîm": { anlam: "Gümüş", osmanlica: "سيم", ipucu: "Cümlede: 'Sîm para aldı.'" },
    "Zerr": { anlam: "Altın", osmanlica: "ذر", ipucu: "Cümlede: 'Zerr yüzük aldı.'" },
    "Masnû'": { anlam: "Yapılmış", osmanlica: "مصنوع", ipucu: "Cümlede: 'Masnû' bir eşya gördü.'" },
    "Edevât": { anlam: "Edat, alet, avadanlık", osmanlica: "ادوات", ipucu: "Cümlede: 'Edevât ile çalıştı.'" },
    "Darb": { anlam: "Vurma, basma", osmanlica: "ضرب", ipucu: "Cümlede: 'Parayı darb etti.'" },
    "Sikke": { anlam: "Paralara vurulan damga", osmanlica: "سكه", ipucu: "Cümlede: 'Sikke bastı.'" },
    "Îfâ": { anlam: "Yerine getirme", osmanlica: "ايفاء", ipucu: "Cümlede: 'Borcu îfâ etti.'" },
    "İn'âm": { anlam: "Bahşiş, hediye verme", osmanlica: "انعام", ipucu: "Cümlede: 'İn'âm etti.'" },
    "Takrîben": { anlam: "Yaklaşık olarak", osmanlica: "تقريبا", ipucu: "Cümlede: 'Takrîben geldi.'" },
    "Akçe": { anlam: "Gümüş para", osmanlica: "اكچه", ipucu: "Cümlede: 'Akçe ödedi.'" },
    "Riyâl": { anlam: "10, bazen de 25 kuruş değerinde Avusturya gümüş sikkesi; Osmanlı 25 kuruşluk İspanya gümüş sikkesi", osmanlica: "ريال", ipucu: "Cümlede: 'Riyâl ile aldı.'" },
    "Nisbet": { anlam: "Oran", osmanlica: "نسبة", ipucu: "Cümlede: 'Nisbet hesapladı.'" },
    "Tavzîh": { anlam: "İzah etme, açıklama", osmanlica: "توضيح", ipucu: "Cümlede: 'Konuyu tavzîh etti.'" },
    "Gāret-kâr": { anlam: "Yağmacı", osmanlica: "غارتكار", ipucu: "Cümlede: 'Gāret-kâr köye geldi.'" },
    "Vâridât": { anlam: "Gelirler", osmanlica: "واردات", ipucu: "Cümlede: 'Vâridât topladı.'" },
    "Te'dîb": { anlam: "Terbiye etme, cezalandırma", osmanlica: "تأديب", ipucu: "Cümlede: 'Çocuğu te'dîb etti.'" },
    "Tenkîl": { anlam: "Uzaklaştırma, ceza verme", osmanlica: "تنكيل", ipucu: "Cümlede: 'Düşmanı tenkîl etti.'" },
    "Umûr": { anlam: "İşler", osmanlica: "امور", ipucu: "Cümlede: 'Umûru düzeltti.'" },
    "Kesîre": { anlam: "Çok", osmanlica: "كثيره", ipucu: "Cümlede: 'Kesîre mal aldı.'" },
    "Mâl-â-mâl": { anlam: "Dopdolu", osmanlica: "مالامال", ipucu: "Cümlede: 'Hazine mâl-â-mâl oldu.'" },
    "Kemâ-yenbağî": { anlam: "Gerektiği gibi", osmanlica: "كما ينبغي", ipucu: "Cümlede: 'Kemâ-yenbağî yaptı.'" },
    "Nizâm vermek": { anlam: "Düzene, yoluna koymak", osmanlica: "نظام ويرمك", ipucu: "Cümlede: 'İşi nizâm verdi.'" },
    "Mesârifât": { anlam: "Masraflar, harcamalar", osmanlica: "مصرفات", ipucu: "Cümlede: 'Mesârifât ödedi.'" },
    "Vezâif": { anlam: "Vazifeler, ücretler", osmanlica: "وظائف", ipucu: "Cümlede: 'Vezâif aldı.'" },
    "Cârî olmak": { anlam: "Geçerli, uygulanır olmak", osmanlica: "جاري اولمق", ipucu: "Cümlede: 'Kural cârî oldu.'" },
    "Havâle": { anlam: "Alacağı bir mukataa mülteziminin vereceğini gösteren yazılı emir", osmanlica: "حواله", ipucu: "Cümlede: 'Havâle verdi.'" },
    "Sergi": { anlam: "Kişiye, zamanında ödenemeyen miktarı göstermek üzere verilen belge", osmanlica: "سرگي", ipucu: "Cümlede: 'Sergi aldı.'" },
    "İlgā": { anlam: "Lağv etme, kaldırma", osmanlica: "الغاء", ipucu: "Cümlede: 'Kuralı ilgā etti.'" },
    "Be-her": { anlam: "Her bir", osmanlica: "بهر", ipucu: "Cümlede: 'Be-her kişi geldi.'" },
    "İ'tibâr": { anlam: "Saygı gösterme, önem verme", osmanlica: "اعتبار", ipucu: "Cümlede: 'İ'tibâr etti.'" },
    "Kese": { anlam: "Yaklaşık olarak 50 bin akçe miktarında para birimi", osmanlica: "كيسه", ipucu: "Cümlede: 'Kese ödedi.'" },
    "Sadr": { anlam: "Görev makamı, sadrazam", osmanlica: "صدر", ipucu: "Cümlede: 'Sadr emri verdi.'" },
    "Katl": { anlam: "Öldürme", osmanlica: "قتل", ipucu: "Cümlede: 'Düşmanı katl etti.'" },
    "Teksîr": { anlam: "Çoğaltma", osmanlica: "تكثير", ipucu: "Cümlede: 'Kitabı teksîr etti.'" },
    "Mecrâ": { anlam: "Kaynak", osmanlica: "مجرا", ipucu: "Cümlede: 'Mecrâ buldu.'" },
    "Sahîh": { anlam: "Sağlıklı, doğru", osmanlica: "صحيح", ipucu: "Cümlede: 'Sahîh bir haber aldı.'" },
    "Tağyîr": { anlam: "Değiştirme, başkalaştırma", osmanlica: "تغيير", ipucu: "Cümlede: 'Planı tağyîr etti.'" },
    "Bâ-husûs": { anlam: "Bilhassa, özellikle", osmanlica: "باخصوص", ipucu: "Cümlede: 'Bâ-husûs o geldi.'" },
    "Müteâkıb": { anlam: "Sonra gelen, onu izleyen", osmanlica: "متعاقب", ipucu: "Cümlede: 'Müteâkıb olay oldu.'" },
    "Tavâif": { anlam: "Taifeler, gruplar", osmanlica: "طوائف", ipucu: "Cümlede: 'Tavâif toplandı.'" },
    "Utüvv": { anlam: "Serkeşlik, ayaklanma", osmanlica: "عتو", ipucu: "Cümlede: 'Utüvv etti.'" },
    "Tuğyân": { anlam: "İsyan, ayaklanma", osmanlica: "طغيان", ipucu: "Cümlede: 'Tuğyân etti.'" },
    "Urûc": { anlam: "Yükselme, yukarı çıkma", osmanlica: "عروج", ipucu: "Cümlede: 'Dağa urûc etti.'" },
    "Ulûfe": { anlam: "Kapıkulu ocaklarının üç ayda bir aldıkları ücret", osmanlica: "علوفه", ipucu: "Cümlede: 'Ulûfe aldı.'" },
    "Tezâyüd": { anlam: "Artma, çoğalma", osmanlica: "تزايد", ipucu: "Cümlede: 'Mal tezâyüd etti.'" },
    "Emvâl": { anlam: "Mallar, paralar", osmanlica: "اموال", ipucu: "Cümlede: 'Emvâl topladı.'" },
    "Dest": { anlam: "El", osmanlica: "دست", ipucu: "Cümlede: 'Dest ile tuttu.'" },
    "Tegallüb": { anlam: "Zorbalık, zorla hüküm sürme", osmanlica: "تغلب", ipucu: "Cümlede: 'Tegallüb etti.'" },
    "Tasallut": { anlam: "Musallat olma, hükmüne alma", osmanlica: "تصلت", ipucu: "Cümlede: 'Tasallut etti.'" },
    "Rü'yet olunmak": { anlam: "Görülmek, karşılanmak", osmanlica: "رؤيت اولونمق", ipucu: "Cümlede: 'Rü'yet olundu.'" },
    "Binâ-berîn": { anlam: "Bununla birlikte", osmanlica: "بنا برين", ipucu: "Cümlede: 'Binâ-berîn geldi.'" },
    "Tevcîh": { anlam: "Yönlendirme, atama", osmanlica: "توجيه", ipucu: "Cümlede: 'Göreve tevcîh etti.'" },
    "Menâsıb": { anlam: "Mansılar, görevler", osmanlica: "مناصب", ipucu: "Cümlede: 'Menâsıb verdi.'" },
    "Mukābil": { anlam: "Karşılık", osmanlica: "مقابل", ipucu: "Cümlede: 'Mukābil ödedi.'" },
    "Eslâf": { anlam: "Seleftekiler, öncekiler", osmanlica: "اسلاف", ipucu: "Cümlede: 'Eslâf örnek oldu.'" },
    "Îrâd": { anlam: "Getirme, gelir", osmanlica: "ايراد", ipucu: "Cümlede: 'Îrâd topladı.'" },
    "Tedbîr": { anlam: "Önlem alma", osmanlica: "تدبير", ipucu: "Cümlede: 'Tedbîr aldı.'" },
    "Add etmek": { anlam: "Saymak, kabul etmek", osmanlica: "عد اتمك", ipucu: "Cümlede: 'Yiğit add etti.'" },
    "Tedârük": { anlam: "Hazırlama, araştırıp bulma, ele geçirme", osmanlica: "تدارك", ipucu: "Cümlede: 'Malı tedârük etti.'" },
    "Âciz": { anlam: "Gücü yetmeyen, güçsüz", osmanlica: "عاجز", ipucu: "Cümlede: 'Âciz kaldı.'" },
    "Kā'ide": { anlam: "Kural, usul", osmanlica: "قاعده", ipucu: "Cümlede: 'Kā'ide koydu.'" },
    "İttihâz etmek": { anlam: "Edinmek", osmanlica: "اتخاذ اتمك", ipucu: "Cümlede: 'Dost ittihâz etti.'" },
    "Sebük": { anlam: "Hafif, yeğni", osmanlica: "سبوك", ipucu: "Cümlede: 'Sebük bir yük aldı.'" },
    "Sebük-mağz": { anlam: "Beyinsiz, akılsız", osmanlica: "سبوك مغز", ipucu: "Cümlede: 'Sebük-mağz bir adamdı.'" },
    "Mağşûş": { anlam: "Bozuk", osmanlica: "مغشوش", ipucu: "Cümlede: 'Mağşûş para buldu.'" },
    "Tab'": { anlam: "Tabiat, yaratılış, huy", osmanlica: "طبع", ipucu: "Cümlede: 'Tab'ı sertti.'" },
    "Züyûf": { anlam: "Kalp, silik, karışık paralar", osmanlica: "زيوف", ipucu: "Cümlede: 'Züyûf para aldı.'" },
    "İstîfâ": { anlam: "Alınma, ödetilme", osmanlica: "استيفا", ipucu: "Cümlede: 'Borcu istîfâ etti.'" }
};
// Osmanlıca Özlü Sözler
const ozluSozler = [
    { osmanlica: "العلم نور", anlam: "İlim nurdur.", sahip: "Hz. Ali" },
    { osmanlica: "الصبر مفتاح", anlam: "Sabır anahtardır.", sahip: "Arap Atasözü" },
    { osmanlica: "العقل زينة", anlam: "Akıl süstür.", sahip: "Hz. Ali" },
    { osmanlica: "الوقت ذهب", anlam: "Zaman altındır.", sahip: "Arap Atasözü" },
    { osmanlica: "الجهل عدو", anlam: "Cehalet düşmandır.", sahip: "Hz. Ali" },
    { osmanlica: "الكرم فضيلة", anlam: "Cömertlik erdemdir.", sahip: "Arap Atasözü" },
    { osmanlica: "قليل دائم", anlam: "Az ve devamlı.", sahip: "Arap Atasözü" },
    { osmanlica: "الحلم سيد", anlam: "Hilmi efendidir.", sahip: "Hz. Ömer" },
    { osmanlica: "العدل اساس", anlam: "Adalet temeldir.", sahip: "Hz. Ömer" },
    { osmanlica: "الصدق نجاة", anlam: "Doğruluk kurtuluştur.", sahip: "Hz. Ebubekir" },
    { osmanlica: "المال زائل", anlam: "Mal geçicidir.", sahip: "Arap Atasözü" },
    { osmanlica: "القلب مرآة", anlam: "Kalp aynadır.", sahip: "Mevlana" },
    { osmanlica: "العمل خير", anlam: "Çalışmak hayırdır.", sahip: "Arap Atasözü" },
    { osmanlica: "الرفق يدوم", anlam: "Yumuşaklık kalıcıdır.", sahip: "Hz. Muhammed" },
    { osmanlica: "الغضب ضرر", anlam: "Öfke zarardır.", sahip: "Arap Atasözü" },
    { osmanlica: "الحياء شعبة", anlam: "Haya şubedir.", sahip: "Hz. Muhammed" },
    { osmanlica: "النظافة ايمان", anlam: "Temizlik imandandır.", sahip: "Hz. Muhammed" },
    { osmanlica: "الخير دائم", anlam: "İyilik kalıcıdır.", sahip: "Arap Atasözü" },
    { osmanlica: "الكذب هلاك", anlam: "Yalan helaktır.", sahip: "Hz. Ebubekir" },
    { osmanlica: "التعلم فرض", anlam: "Öğrenmek farzdır.", sahip: "Hz. Muhammed" },
    { osmanlica: "الصمت حكمة", anlam: "Sükût hikmettir.", sahip: "Arap Atasözü" },
    { osmanlica: "الوفاء خلق", anlam: "Vefa ahlaktır.", sahip: "Arap Atasözü" },
    { osmanlica: "الجار قريب", anlam: "Komşu yakındır.", sahip: "Hz. Muhammed" },
    { osmanlica: "الفضل عند الله", anlam: "Fazilet Allah katındadır.", sahip: "Kur’an-ı Kerim" },
    { osmanlica: "العز نفس", anlam: "İzzet nefistedir.", sahip: "Arap Atasözü" },
    { osmanlica: "الفقر فخرى", anlam: "Fakirlik övüncümdür.", sahip: "Hz. Muhammed" },
    { osmanlica: "القناعة كنز", anlam: "Kanaat hazinedir.", sahip: "Arap Atasözü" },
    { osmanlica: "الجود يبقى", anlam: "Cömertlik kalır.", sahip: "Arap Atasözü" },
    { osmanlica: "الحق نور", anlam: "Hak nurdur.", sahip: "Arap Atasözü" },
    { osmanlica: "العزم نصر", anlam: "Azim zaferdir.", sahip: "Arap Atasözü" }
];

// Desen ve Renk Seçenekleri
const desenler = [
    "https://www.transparenttextures.com/patterns/ottoman.png",
    "https://www.transparenttextures.com/patterns/paper-fibers.png",
    "https://www.transparenttextures.com/patterns/arabesque.png",
    "https://www.transparenttextures.com/patterns/subtle-zebra-3d.png",
    "https://www.transparenttextures.com/patterns/woven.png"
];

const renkler = [
    "#f9e8d9", "#e6d9c9", "#d9e6e6", "#e6e6d9", "#d9d9e6",
    "#8b4513", "#2e7d32", "#4b0082", "#d4af37", "#c62828"
];

// DOM Elemanları
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const tabButtons = document.querySelectorAll(".tab-bar button");
const sections = document.querySelectorAll(".section");
const kelimeListeUl = document.getElementById("kelime-liste-ul");
const ozluSoz = document.getElementById("ozlu-soz");
const ozluSozAnlam = document.getElementById("ozlu-soz-anlam");
const ozluSozSahip = document.getElementById("ozlu-soz-sahip");
const banner = document.querySelector(".banner");

// Ana Sayfa Elemanları
const osmanliBanner = document.getElementById("osmanli-banner");
const hosgeldinMesaj = document.getElementById("hosgeldin-mesaj");
const gununKelimeSpan = document.getElementById("gunun-kelime");
const gununOsmanlicaSpan = document.getElementById("gunun-osmanlica");
const gununAnlamSpan = document.getElementById("gunun-anlam");
const sesliOkuBtn = document.getElementById("sesli-oku");
const anaOgrenilenSpan = document.getElementById("ana-ogrenilen");
const anaToplamSpan = document.getElementById("ana-toplam");
const anaPuanSpan = document.getElementById("ana-puan");
const anaGunlukHedefSpan = document.getElementById("ana-gunluk-hedef");
const anaHedefSayiSpan = document.getElementById("ana-hedef-sayi");
const rozetHedef = document.getElementById("rozet-hedef");

// Kelimeler Bölümü
const kelimeSpan = document.getElementById("kelime");
const osmanlicaSpan = document.getElementById("osmanlica");
const anlamInput = document.getElementById("anlam");
const oncekiBtn = document.getElementById("onceki");
const kontrolBtn = document.getElementById("kontrol");
const sonrakiBtn = document.getElementById("sonraki");
const ipucuBtn = document.getElementById("ipucu");
const ipucuAlani = document.getElementById("ipucu-alani");
const sonucDiv = document.getElementById("sonuc");

// Profil Bölümü
const ogrenilenSpan = document.getElementById("ogrenilen");
const toplamSpan = document.getElementById("toplam");
const puanSpan = document.getElementById("puan");
const gunlukHedefSpan = document.getElementById("gunluk-hedef");
const hedefSayiSpan = document.getElementById("hedef-sayi");
const ogrenmeOraniSpan = document.getElementById("ogrenme-orani");
const gunlukAktiviteSpan = document.getElementById("gunluk-aktivite");
const enIyiGunSpan = document.getElementById("en-iyi-gun");
const ortalamaPuanSpan = document.getElementById("ortalama-puan");
const dogruYanlisSpan = document.getElementById("dogru-yanlis");
const dogrulukOraniSpan = document.getElementById("dogruluk-orani");
const toplamSureSpan = document.getElementById("toplam-sure");
const haftalikIlerlemeSpan = document.getElementById("haftalik-ilerleme");
const favoriBolumSpan = document.getElementById("favori-bolum");
const kelimeTekrarSpan = document.getElementById("kelime-tekrar");
const rozetlerSpan = document.getElementById("rozetler");

// Test Bölümü
const testSoru = document.getElementById("test-soru");
const seceneklerDiv = document.getElementById("secenekler");
const testSonuc = document.getElementById("test-sonuc");

// Oyun Bölümü (Yeni Elemanlar Eklendi)
const oyunKelime = document.getElementById("oyun-kelime");
const hakSpan = document.getElementById("hak");
const harfInput = document.getElementById("harf");
const tahminBtn = document.getElementById("tahmin");
const oyunIpucuBtn = document.getElementById("oyun-ipucu");
const oyunIpucuAlani = document.getElementById("oyun-ipucu-alani");
const oyunSonuc = document.getElementById("oyun-sonuc");

// Eşleştirme Bölümü
const eslestirmeKartlar = document.getElementById("eslestirme-kartlar");
const eslestirmeSonuc = document.getElementById("eslestirme-sonuc");

// Ayarlar Bölümü
const kullaniciAdiInput = document.getElementById("kullanici-adi");
const temaSecici = document.getElementById("tema-secici");
const pdfIndir = document.getElementById("pdf-indir");
const hedefSecici = document.getElementById("hedef-secici");
const hatirlatmaSaati = document.getElementById("hatirlatma-saati");
const gunSecici = document.getElementById("gun-secici");
const hatirlatmaEkle = document.getElementById("hatirlatma-ekle");
const hatirlatmaListesi = document.getElementById("hatirlatma-listesi");
const hatirlatmaKaydet = document.getElementById("hatirlatma-kaydet");

// Yan Menü Yeni Elemanlar
const iletisimBtn = document.getElementById("iletisim-btn");
const paylasBtn = document.getElementById("paylas-btn");

// Değişkenler
let mevcutIndex = 0;
let ogrenilenKelimeler = JSON.parse(localStorage.getItem("ogrenilenKelimeler")) || [];
let puan = JSON.parse(localStorage.getItem("puan")) || 0;
let gunlukHedef = JSON.parse(localStorage.getItem("gunlukHedef")) || { tarih: new Date().toDateString(), sayi: 0, hedef: 5 };
let gunlukAktivite = JSON.parse(localStorage.getItem("gunlukAktivite")) || { tarih: new Date().toDateString(), sayi: 0 };
let enIyiGun = JSON.parse(localStorage.getItem("enIyiGun")) || { tarih: "-", sayi: 0 };
let gunlukPuanlar = JSON.parse(localStorage.getItem("gunlukPuanlar")) || [];
let dogruYanlis = JSON.parse(localStorage.getItem("dogruYanlis")) || { dogru: 0, yanlis: 0 };
let toplamSure = JSON.parse(localStorage.getItem("toplamSure")) || 0;
let haftalikIlerleme = JSON.parse(localStorage.getItem("haftalikIlerleme")) || [];
let bolumKullanim = JSON.parse(localStorage.getItem("bolumKullanim")) || { kelimeler: 0, test: 0, oyun: 0, eslestirme: 0 };
let kelimeTekrar = JSON.parse(localStorage.getItem("kelimeTekrar")) || {};
let rozetler = JSON.parse(localStorage.getItem("rozetler")) || [];
let testIndex = 0;
let oyunKelimeSecilen = "";
let oyunTahmin = [];
let kalanHak = 6;
let hatirlatmalar = JSON.parse(localStorage.getItem("hatirlatmalar")) || [];
let baslangicZamani = null;
let kullaniciAdi = localStorage.getItem("kullaniciAdi") || "";

// Menü Aç/Kapa
hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

// Banner’da Günlük Özlü Söz Göster
function ozluSozGoster() {
    const today = new Date().toDateString();
    let savedDay = localStorage.getItem("ozluSozDay");
    let sozIndex = localStorage.getItem("ozluSozIndex");

    if (savedDay !== today || !sozIndex) {
        sozIndex = Math.floor(Math.random() * ozluSozler.length);
        localStorage.setItem("ozluSozDay", today);
        localStorage.setItem("ozluSozIndex", sozIndex);
    } else {
        sozIndex = parseInt(sozIndex);
    }

    const secilenSoz = ozluSozler[sozIndex];
    ozluSoz.textContent = secilenSoz.osmanlica;
    ozluSozAnlam.textContent = secilenSoz.anlam;
    ozluSozSahip.textContent = `- ${secilenSoz.sahip}`;

    const desen = desenler[Math.floor(Math.random() * desenler.length)];
    const arkaPlanRenk = renkler[Math.floor(Math.random() * 5)];
    const metinRenk = renkler[Math.floor(Math.random() * 5) + 5];
    banner.style.background = `url('${desen}'), ${arkaPlanRenk}`;
    banner.style.borderBottomColor = metinRenk;
    ozluSoz.style.color = metinRenk;
    ozluSozAnlam.style.color = "#555";
    ozluSozSahip.style.color = "#777";
}

// Rastgele Osmanlı Deseni
function osmanliDesenGoster() {
    const today = new Date().toDateString();
    let savedDay = localStorage.getItem("desenDay");
    let desenIndex = localStorage.getItem("desenIndex");

    if (savedDay !== today || !desenIndex) {
        desenIndex = Math.floor(Math.random() * desenler.length);
        localStorage.setItem("desenDay", today);
        localStorage.setItem("desenIndex", desenIndex);
    } else {
        desenIndex = parseInt(desenIndex);
    }

    const desen = desenler[desenIndex];
    const arkaPlanRenk = renkler[Math.floor(Math.random() * 5)];
    osmanliBanner.style.background = `url('${desen}'), ${arkaPlanRenk}`;
}

// Kullanıcıya Özel Hoş Geldin Mesajı
function hosgeldinMesajGoster() {
    hosgeldinMesaj.innerHTML = kullaniciAdi ? `<i class="fas fa-home"></i> Hoş Geldiniz, ${kullaniciAdi}!` : `<i class="fas fa-home"></i> Hoş Geldiniz!`;
}

// Günün Kelimesi Göster
function gununKelimesiGoster() {
    const today = new Date().toDateString();
    let savedDay = localStorage.getItem("gununKelimeDay");
    let kelimeIndex = localStorage.getItem("gununKelimeIndex");

    if (savedDay !== today || !kelimeIndex) {
        kelimeIndex = Math.floor(Math.random() * Object.keys(kelimeler).length);
        localStorage.setItem("gununKelimeDay", today);
        localStorage.setItem("gununKelimeIndex", kelimeIndex);
    } else {
        kelimeIndex = parseInt(kelimeIndex);
    }

    const kelimeListesi = Object.keys(kelimeler);
    const secilenKelime = kelimeListesi[kelimeIndex];
    gununKelimeSpan.textContent = secilenKelime;
    gununOsmanlicaSpan.textContent = kelimeler[secilenKelime].osmanlica;
    gununAnlamSpan.textContent = kelimeler[secilenKelime].anlam;
}

// Sesli Kelime Okuma
sesliOkuBtn.addEventListener("click", () => {
    const kelime = gununKelimeSpan.textContent;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(kelime);
        utterance.lang = "tr-TR";
        utterance.volume = 1.0;
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        speechSynthesis.speak(utterance);
    } else {
        alert("Üzgünüm, tarayıcınız sesli okuma özelliğini desteklemiyor.");
    }
});

// Günlük Rozet Hedefi
function gunlukRozetHedefiGoster() {
    const rozetHedefler = [
        { ad: "Başlangıç Ustası", hedefPuan: 0, kelimeSayi: 5, mesaj: `${ogrenilenKelimeler.length}/5 kelime öğrendin!` },
        { ad: "Puan Avcısı", hedefPuan: 50, kelimeSayi: 0, mesaj: `${puan}/50 puana ${50 - puan} puan kaldı!` },
        { ad: "Günlük Şampiyon", hedefPuan: 0, kelimeSayi: 10, mesaj: `${gunlukHedef.sayi}/10 kelimeye ${10 - gunlukHedef.sayi} kelime kaldı!` }
    ];

    const today = new Date().toDateString();
    let savedDay = localStorage.getItem("rozetHedefDay");
    let hedefIndex = localStorage.getItem("rozetHedefIndex");

    if (savedDay !== today || !hedefIndex) {
        hedefIndex = Math.floor(Math.random() * rozetHedefler.length);
        localStorage.setItem("rozetHedefDay", today);
        localStorage.setItem("rozetHedefIndex", hedefIndex);
    } else {
        hedefIndex = parseInt(hedefIndex);
    }

    const secilenHedef = rozetHedefler[hedefIndex];
    if (rozetler.includes(secilenHedef.ad)) {
        rozetHedef.textContent = `${secilenHedef.ad} rozetini zaten kazandın!`;
    } else {
        rozetHedef.textContent = `Günlük Rozet: ${secilenHedef.ad} - ${secilenHedef.mesaj}`;
    }
}

// Kelime Listesini Göster
function kelimeListesiniGoster() {
    kelimeListeUl.innerHTML = "";
    Object.entries(kelimeler).forEach(([kelime, info]) => {
        const li = document.createElement("li");
        li.innerHTML = `${info.osmanlica} - ${kelime} <span class="anlam-tooltip">${info.anlam}</span>`;
        kelimeListeUl.appendChild(li);
    });
}

// Bölüm Gösterme
function showSection(sectionId) {
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
    tabButtons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(tabButtons).find(btn => btn.textContent.includes(sectionId.split("-")[0]));
    if (activeBtn) activeBtn.classList.add("active");
    sideMenu.classList.remove("active");

    if (sectionId === "kelimeler") {
        kelimeGoster(mevcutIndex);
        bolumKullanim.kelimeler++;
    }
    if (sectionId === "profil") istatistikGuncelle();
    if (sectionId === "test") {
        testBaslat();
        bolumKullanim.test++;
    }
    if (sectionId === "oyun") {
        oyunBaslat();
        bolumKullanim.oyun++;
    }
    if (sectionId === "eslestirme") {
        eslestirmeBaslat();
        bolumKullanim.eslestirme++;
    }
    if (sectionId === "ayarlar") hatirlatmaListesiniGuncelle();
    if (sectionId === "kelimeler-listesi") kelimeListesiniGoster();
}

// İstatistik Güncelle
function istatistikGuncelle() {
    toplamSpan.textContent = Object.keys(kelimeler).length;
    ogrenilenSpan.textContent = ogrenilenKelimeler.length;
    puanSpan.textContent = puan;
    gunlukHedefSpan.textContent = gunlukHedef.sayi;
    hedefSayiSpan.textContent = gunlukHedef.hedef;

    anaOgrenilenSpan.textContent = ogrenilenKelimeler.length;
    anaToplamSpan.textContent = Object.keys(kelimeler).length;
    anaPuanSpan.textContent = puan;
    anaGunlukHedefSpan.textContent = gunlukHedef.sayi;
    anaHedefSayiSpan.textContent = gunlukHedef.hedef;

    const ogrenmeOrani = ((ogrenilenKelimeler.length / Object.keys(kelimeler).length) * 100).toFixed(1);
    ogrenmeOraniSpan.textContent = `${ogrenmeOrani}%`;

    if (gunlukAktivite.tarih !== new Date().toDateString()) {
        gunlukAktivite = { tarih: new Date().toDateString(), sayi: 0 };
    }
    gunlukAktiviteSpan.textContent = gunlukAktivite.sayi;

    if (gunlukHedef.sayi > enIyiGun.sayi) {
        enIyiGun = { tarih: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }), sayi: gunlukHedef.sayi };
    }
    enIyiGunSpan.textContent = enIyiGun.sayi > 0 ? `${enIyiGun.tarih} - ${enIyiGun.sayi} Kelime` : "-";

    if (gunlukHedef.tarih !== new Date().toDateString()) {
        gunlukPuanlar.push({ tarih: gunlukHedef.tarih, puan: puan - (gunlukPuanlar.length > 0 ? gunlukPuanlar[gunlukPuanlar.length - 1].puan : 0) });
    }
    const ortalamaPuan = gunlukPuanlar.length > 0 ? (puan / gunlukPuanlar.length).toFixed(1) : 0;
    ortalamaPuanSpan.textContent = ortalamaPuan;

    dogruYanlisSpan.textContent = `${dogruYanlis.dogru}/${dogruYanlis.yanlis}`;
    const toplamCevap = dogruYanlis.dogru + dogruYanlis.yanlis;
    const dogrulukOrani = toplamCevap > 0 ? ((dogruYanlis.dogru / toplamCevap) * 100).toFixed(1) : 0;
    dogrulukOraniSpan.textContent = `${dogrulukOrani}%`;

    toplamSureSpan.textContent = `${Math.floor(toplamSure / 60)} sa ${toplamSure % 60} dk`;

    const haftaBaslangic = new Date();
    haftaBaslangic.setDate(haftaBaslangic.getDate() - 7);
    const haftalikSayi = haftalikIlerleme.filter(i => new Date(i.tarih) >= haftaBaslangic).reduce((sum, i) => sum + i.sayi, 0);
    haftalikIlerlemeSpan.textContent = haftalikSayi;

    const favoriBolum = Object.entries(bolumKullanim).reduce((a, b) => a[1] > b[1] ? a : b, ["-", 0])[0];
    favoriBolumSpan.textContent = favoriBolum === "-" ? "-" : favoriBolum.charAt(0).toUpperCase() + favoriBolum.slice(1);

    kelimeTekrarSpan.textContent = Object.entries(kelimeTekrar).length > 0 ? Object.entries(kelimeTekrar).map(([k, v]) => `${k}: ${v}`).join(", ") : "-";

    const yeniRozetler = [];
    if (ogrenilenKelimeler.length >= 5 && !rozetler.includes("Başlangıç Ustası")) yeniRozetler.push("Başlangıç Ustası");
    if (puan >= 50 && !rozetler.includes("Puan Avcısı")) yeniRozetler.push("Puan Avcısı");
    if (gunlukHedef.sayi >= 10 && !rozetler.includes("Günlük Şampiyon")) yeniRozetler.push("Günlük Şampiyon");
    rozetler.push(...yeniRozetler);
    rozetlerSpan.textContent = rozetler.length > 0 ? rozetler.join(", ") : "-";

    localStorage.setItem("ogrenilenKelimeler", JSON.stringify(ogrenilenKelimeler));
    localStorage.setItem("puan", JSON.stringify(puan));
    localStorage.setItem("gunlukHedef", JSON.stringify(gunlukHedef));
    localStorage.setItem("gunlukAktivite", JSON.stringify(gunlukAktivite));
    localStorage.setItem("enIyiGun", JSON.stringify(enIyiGun));
    localStorage.setItem("gunlukPuanlar", JSON.stringify(gunlukPuanlar));
    localStorage.setItem("dogruYanlis", JSON.stringify(dogruYanlis));
    localStorage.setItem("toplamSure", JSON.stringify(toplamSure));
    localStorage.setItem("haftalikIlerleme", JSON.stringify(haftalikIlerleme));
    localStorage.setItem("bolumKullanim", JSON.stringify(bolumKullanim));
    localStorage.setItem("kelimeTekrar", JSON.stringify(kelimeTekrar));
    localStorage.setItem("rozetler", JSON.stringify(rozetler));

    gunlukRozetHedefiGoster();
}

// Kelime Göster
function kelimeGoster(index) {
    const kelimeListesi = Object.keys(kelimeler);
    if (index >= 0 && index < kelimeListesi.length) {
        mevcutIndex = index;
        const secilenKelime = kelimeListesi[mevcutIndex];
        kelimeSpan.textContent = secilenKelime;
        osmanlicaSpan.textContent = kelimeler[secilenKelime].osmanlica;
        anlamInput.value = "";
        sonucDiv.textContent = "";
        ipucuAlani.textContent = "";
    }
}

// Anlam Kontrol
kontrolBtn.addEventListener("click", kontrolEt);

function kontrolEt() {
    const secilenKelime = Object.keys(kelimeler)[mevcutIndex];
    const girilenAnlam = anlamInput.value.trim().toLowerCase();
    const dogruAnlam = kelimeler[secilenKelime].anlam.toLowerCase();
    gunlukAktivite.sayi++;
    if (girilenAnlam === dogruAnlam) {
        sonucDiv.textContent = "Doğru! (+10 Puan)";
        sonucDiv.className = "dogru";
        dogruYanlis.dogru++;
        if (!ogrenilenKelimeler.includes(secilenKelime)) {
            ogrenilenKelimeler.push(secilenKelime);
            puan += 10;
            if (gunlukHedef.tarih !== new Date().toDateString()) {
                gunlukHedef = { tarih: new Date().toDateString(), sayi: 0, hedef: gunlukHedef.hedef };
                haftalikIlerleme.push({ tarih: gunlukHedef.tarih, sayi: 1 });
            } else {
                gunlukHedef.sayi++;
                haftalikIlerleme[haftalikIlerleme.length - 1].sayi = gunlukHedef.sayi;
            }
            kelimeTekrar[secilenKelime] = (kelimeTekrar[secilenKelime] || 0) + 1;
        }
        kelimeGoster(mevcutIndex + 1);
    } else {
        sonucDiv.textContent = `Yanlış! Doğru: ${dogruAnlam}`;
        sonucDiv.className = "yanlis";
        dogruYanlis.yanlis++;
    }
    istatistikGuncelle();
}

// Enter ile kontrol ve geçiş
anlamInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && anlamInput.value.trim() !== "") {
        kontrolEt();
    }
});

oncekiBtn.addEventListener("click", () => kelimeGoster(mevcutIndex - 1));
sonrakiBtn.addEventListener("click", () => kelimeGoster(mevcutIndex + 1));

// İpucu Göster
ipucuBtn.addEventListener("click", () => {
    const secilenKelime = Object.keys(kelimeler)[mevcutIndex];
    ipucuAlani.textContent = kelimeler[secilenKelime].ipucu;
    gunlukAktivite.sayi++;
    istatistikGuncelle();
});

// Çoktan Seçmeli Quiz Başlat
function testBaslat() {
    const kelimeListesi = Object.keys(kelimeler).sort(() => Math.random() - 0.5);
    testIndex = 0;
    testSoruGoster(kelimeListesi);
}

function testSoruGoster(kelimeListesi) {
    if (testIndex >= kelimeListesi.length) {
        testSoru.textContent = "Quiz Bitti!";
        seceneklerDiv.innerHTML = "";
        testSonuc.textContent = "";
        return;
    }

    const kelime = kelimeListesi[testIndex];
    testSoru.textContent = `${kelime} (${kelimeler[kelime].osmanlica}) kelimesinin anlamı nedir?`;
    testSonuc.textContent = "";

    const dogruAnlam = kelimeler[kelime].anlam;
    const tumAnlamlar = Object.values(kelimeler).map(k => k.anlam).filter(a => a !== dogruAnlam);
    const yanlisSecenekler = [];

    const maxYanlis = Math.min(3, tumAnlamlar.length);
    for (let i = 0; i < maxYanlis; i++) {
        const rastgeleAnlam = tumAnlamlar[Math.floor(Math.random() * tumAnlamlar.length)];
        if (!yanlisSecenekler.includes(rastgeleAnlam)) {
            yanlisSecenekler.push(rastgeleAnlam);
        }
    }

    while (yanlisSecenekler.length < 3) {
        yanlisSecenekler.push("Bilmiyorum");
    }

    const secenekler = [dogruAnlam, ...yanlisSecenekler].sort(() => Math.random() - 0.5);

    seceneklerDiv.innerHTML = "";
    secenekler.forEach(secenek => {
        const btn = document.createElement("button");
        btn.className = "secenek";
        btn.textContent = secenek;
        btn.addEventListener("click", () => {
            gunlukAktivite.sayi++;
            document.querySelectorAll(".secenek").forEach(b => b.disabled = true);
            if (secenek === dogruAnlam) {
                btn.classList.add("dogru");
                testSonuc.textContent = "Doğru! (+10 Puan)";
                testSonuc.className = "dogru";
                dogruYanlis.dogru++;
                if (!ogrenilenKelimeler.includes(kelime)) {
                    ogrenilenKelimeler.push(kelime);
                    puan += 10;
                    if (gunlukHedef.tarih !== new Date().toDateString()) {
                        gunlukHedef = { tarih: new Date().toDateString(), sayi: 0, hedef: gunlukHedef.hedef };
                        haftalikIlerleme.push({ tarih: gunlukHedef.tarih, sayi: 1 });
                    } else {
                        gunlukHedef.sayi++;
                        haftalikIlerleme[haftalikIlerleme.length - 1].sayi = gunlukHedef.sayi;
                    }
                    kelimeTekrar[kelime] = (kelimeTekrar[kelime] || 0) + 1;
                }
            } else {
                btn.classList.add("yanlis");
                testSonuc.textContent = `Yanlış! Doğru: ${dogruAnlam}`;
                testSonuc.className = "yanlis";
                dogruYanlis.yanlis++;
                document.querySelectorAll(".secenek").forEach(b => {
                    if (b.textContent === dogruAnlam) b.classList.add("dogru");
                });
            }
            istatistikGuncelle();
            setTimeout(() => {
                testIndex++;
                testSoruGoster(kelimeListesi);
            }, 1500);
        });
        seceneklerDiv.appendChild(btn);
    });
}

// Oyun Başlat (Adam Asmaca)
function oyunBaslat() {
    oyunKelimeSecilen = Object.keys(kelimeler)[Math.floor(Math.random() * Object.keys(kelimeler).length)];
    oyunTahmin = Array(oyunKelimeSecilen.length).fill("_");
    kalanHak = 6;
    oyunKelime.textContent = oyunTahmin.join(" ");
    hakSpan.textContent = kalanHak;
    harfInput.value = "";
    oyunIpucuAlani.textContent = ""; // İpucu alanını sıfırla
    oyunSonuc.textContent = "";
}

tahminBtn.addEventListener("click", tahminEt);

function tahminEt() {
    const harf = harfInput.value.toLowerCase();
    gunlukAktivite.sayi++;
    if (oyunKelimeSecilen.toLowerCase().includes(harf)) {
        for (let i = 0; i < oyunKelimeSecilen.length; i++) {
            if (oyunKelimeSecilen[i].toLowerCase() === harf) oyunTahmin[i] = oyunKelimeSecilen[i];
        }
        oyunKelime.textContent = oyunTahmin.join(" ");
        oyunSonuc.textContent = "Doğru!";
    } else {
        kalanHak--;
        hakSpan.textContent = kalanHak;
        oyunSonuc.textContent = "Yanlış!";
    }
    if (!oyunTahmin.includes("_")) {
        oyunSonuc.textContent = "Kazandınız! (+20 Puan)";
        if (!ogrenilenKelimeler.includes(oyunKelimeSecilen)) {
            ogrenilenKelimeler.push(oyunKelimeSecilen);
            puan += 20;
            if (gunlukHedef.tarih !== new Date().toDateString()) {
                gunlukHedef = { tarih: new Date().toDateString(), sayi: 0, hedef: gunlukHedef.hedef };
                haftalikIlerleme.push({ tarih: gunlukHedef.tarih, sayi: 1 });
            } else {
                gunlukHedef.sayi++;
                haftalikIlerleme[haftalikIlerleme.length - 1].sayi = gunlukHedef.sayi;
            }
            kelimeTekrar[oyunKelimeSecilen] = (kelimeTekrar[oyunKelimeSecilen] || 0) + 1;
        }
        setTimeout(oyunBaslat, 1500);
    } else if (kalanHak <= 0) {
        oyunSonuc.textContent = `Kaybettiniz! Kelime: ${oyunKelimeSecilen}`;
        setTimeout(oyunBaslat, 1500);
    }
    harfInput.value = "";
    istatistikGuncelle();
}

// Enter ile tahmin ve geçiş
harfInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && harfInput.value.trim() !== "") {
        tahminEt();
    }
});

// Adam Asmaca İpucu Göster
oyunIpucuBtn.addEventListener("click", () => {
    oyunIpucuAlani.textContent = kelimeler[oyunKelimeSecilen].ipucu;
    gunlukAktivite.sayi++;
    istatistikGuncelle();
});

// Eşleştirme Başlat
function eslestirmeBaslat() {
    const kelimeListesi = Object.keys(kelimeler).slice(0, 4);
    const kartlar = [...kelimeListesi, ...kelimeListesi.map(k => kelimeler[k].anlam)].sort(() => Math.random() - 0.5);
    let secilen = [];
    eslestirmeKartlar.innerHTML = kartlar.map(k => `<button class="kart">${k}</button>`).join("");
    eslestirmeSonuc.textContent = "";
    document.querySelectorAll(".kart").forEach(kart => {
        kart.addEventListener("click", () => {
            gunlukAktivite.sayi++;
            kart.disabled = true;
            secilen.push(kart.textContent);
            if (secilen.length === 2) {
                const [bir, iki] = secilen;
                const eslesme = kelimeListesi.some(k => (bir === k && iki === kelimeler[k].anlam) || (iki === k && bir === kelimeler[k].anlam));
                if (eslesme) {
                    eslestirmeSonuc.textContent = "Eşleşti! (+15 Puan)";
                    eslestirmeSonuc.className = "dogru";
                    const kelime = kelimeListesi.find(k => bir === k || iki === k);
                    if (!ogrenilenKelimeler.includes(kelime)) {
                        ogrenilenKelimeler.push(kelime);
                        puan += 15;
                        if (gunlukHedef.tarih !== new Date().toDateString()) {
                            gunlukHedef = { tarih: new Date().toDateString(), sayi: 0, hedef: gunlukHedef.hedef };
                            haftalikIlerleme.push({ tarih: gunlukHedef.tarih, sayi: 1 });
                        } else {
                            gunlukHedef.sayi++;
                            haftalikIlerleme[haftalikIlerleme.length - 1].sayi = gunlukHedef.sayi;
                        }
                        kelimeTekrar[kelime] = (kelimeTekrar[kelime] || 0) + 1;
                    }
                } else {
                    eslestirmeSonuc.textContent = "Eşleşmedi!";
                    eslestirmeSonuc.className = "yanlis";
                    document.querySelectorAll(".kart").forEach(k => {
                        if (k.textContent === bir || k.textContent === iki) k.disabled = false;
                    });
                }
                secilen = [];
                setTimeout(() => eslestirmeSonuc.textContent = "", 1000);
            }
            istatistikGuncelle();
        });
    });
}

// Tema Seçimi
temaSecici.addEventListener("change", (e) => {
    document.body.className = e.target.value;
    localStorage.setItem("tema", e.target.value);
});

// Kullanıcı Adı Kaydet
kullaniciAdiInput.addEventListener("input", (e) => {
    kullaniciAdi = e.target.value.trim();
    localStorage.setItem("kullaniciAdi", kullaniciAdi);
    hosgeldinMesajGoster();
});

// PDF İndirme
const { jsPDF } = window.jspdf;
pdfIndir.addEventListener("click", () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Osmanlıca Kelime Listesi", 10, 10);
    doc.setFontSize(12);
    let y = 20;
    Object.entries(kelimeler).forEach(([kelime, info]) => {
        doc.text(`${kelime}: ${info.anlam} (${info.osmanlica})`, 10, y);
        y += 10;
    });
    doc.save("osmanlica_kelimeler.pdf");
});

// Günlük Hedef Ayarı
hedefSecici.addEventListener("change", (e) => {
    gunlukHedef.hedef = parseInt(e.target.value);
    if (gunlukHedef.tarih !== new Date().toDateString()) {
        gunlukHedef = { tarih: new Date().toDateString(), sayi: 0, hedef: gunlukHedef.hedef };
    }
    istatistikGuncelle();
});

// Hatırlatma Fonksiyonları
function hatirlatmaListesiniGuncelle() {
    hatirlatmaListesi.innerHTML = "";
    hatirlatmalar.forEach((h, index) => {
        const li = document.createElement("li");
        li.textContent = `${h.saat} - ${h.gun === "her-gun" ? "Her Gün" : ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"][h.gun]}`;
        const silBtn = document.createElement("button");
        silBtn.textContent = "Sil";
        silBtn.addEventListener("click", () => {
            hatirlatmalar.splice(index, 1);
            hatirlatmaListesiniGuncelle();
        });
        li.appendChild(silBtn);
        hatirlatmaListesi.appendChild(li);
    });
}

hatirlatmaEkle.addEventListener("click", () => {
    const saat = hatirlatmaSaati.value;
    const gun = gunSecici.value;
    if (saat) {
        hatirlatmalar.push({ saat, gun });
        hatirlatmaListesiniGuncelle();
        hatirlatmaSaati.value = "";
    } else {
        alert("Lütfen bir saat seçin!");
    }
});

function kelimeHatirlat() {
    const simdi = new Date();
    const gun = simdi.getDay();
    hatirlatmalar.forEach(h => {
        const [saat, dakika] = h.saat.split(":");
        if ((h.gun === "her-gun" || parseInt(h.gun) === gun) &&
            simdi.getHours() === parseInt(saat) && simdi.getMinutes() === parseInt(dakika)) {
            const kelimeListesi = Object.keys(kelimeler);
            const rastgeleKelime = kelimeListesi[Math.floor(Math.random() * kelimeListesi.length)];
            new Notification("Kelime Hatırlatma", {
                body: `${rastgeleKelime}: ${kelimeler[rastgeleKelime].anlam} (${kelimeler[rastgeleKelime].osmanlica})`,
                icon: "https://via.placeholder.com/32"
            });
        }
    });
}

hatirlatmaKaydet.addEventListener("click", () => {
    localStorage.setItem("hatirlatmalar", JSON.stringify(hatirlatmalar));
    alert("Hatırlatmalar kaydedildi! Bildirim izni vermeniz gerekebilir.");
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            setInterval(kelimeHatirlat, 60000);
        }
    });
});

// Yeni Yan Menü Fonksiyonları
iletisimBtn.addEventListener("click", () => {
    const email = "destek@osmanlicaezber.com"; // Örnek bir e-posta adresi
    window.location.href = `mailto:${email}?subject=Osmanlıca Ezber Hakkında&body=Merhaba, bir sorum var:`;
    sideMenu.classList.remove("active");
});

paylasBtn.addEventListener("click", () => {
    const paylasimMetni = `Osmanlıca Ezber ile kelime öğreniyorum! Puanım: ${puan}, öğrendiğim kelimeler: ${ogrenilenKelimeler.length}. Sen de dene!`;
    if (navigator.share) {
        navigator.share({
            title: "Osmanlıca Ezber",
            text: paylasimMetni,
            url: window.location.href
        }).then(() => console.log("Paylaşım başarılı!"))
          .catch(err => console.log("Paylaşım hatası:", err));
    } else {
        alert("Bu tarayıcı paylaşımı desteklemiyor. Metni kopyalayın:\n" + paylasimMetni);
        navigator.clipboard.writeText(paylasimMetni);
    }
    sideMenu.classList.remove("active");
});

// Tarih ve Saat Güncelleme
function tarihSaatGuncelle() {
    const simdi = new Date();
    const tarih = simdi.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
    const saat = simdi.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("tarih-saat").textContent = `${tarih} ${saat}`;
}

// Toplam Süre Takibi
function sureyiGuncelle() {
    if (baslangicZamani) {
        const simdi = new Date();
        const gecenSure = Math.floor((simdi - baslangicZamani) / 60000);
        toplamSure += gecenSure;
        baslangicZamani = simdi;
        istatistikGuncelle();
    }
}

// İlk Yükleme
kullaniciAdiInput.value = kullaniciAdi;
const kaydedilenTema = localStorage.getItem("tema") || "osmanli";
document.body.className = kaydedilenTema;
temaSecici.value = kaydedilenTema;
hedefSecici.value = gunlukHedef.hedef;
hatirlatmaListesiniGuncelle();
ozluSozGoster();
osmanliDesenGoster();
hosgeldinMesajGoster();
gununKelimesiGoster();
gunlukRozetHedefiGoster();
if (Notification.permission === "granted") {
    setInterval(kelimeHatirlat, 60000);
}
showSection("ana-sayfa");
istatistikGuncelle();
setInterval(tarihSaatGuncelle, 1000);
tarihSaatGuncelle();
baslangicZamani = new Date();
setInterval(sureyiGuncelle, 60000);