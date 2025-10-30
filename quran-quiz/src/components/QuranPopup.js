// src/components/QuranPopup.js - FIXED
import React from 'react';
import './QuranPopup.css';

// Translation function - MOVED TO TOP
const getTranslation = (surahId) => {
  const translations = {
    1: "Bismillaahi Ar-Raxmaan Ar-Raxiim. Ammaana Eebe waxaa weyni Isaga, Eebaha Caalamka, Ar-Raxmaan, Ar-Raxiim, Isaga Maalinka Abaalmarinta. Adaa aan caabudaynaa, Adaa kaalmayn waydiisanaynaa. Noo hanuuni Jidka Toosan, Jidka kuwa aad u nicmeeysey, kuwaan cadhoon, kuwa dhummay.",
    114: "Waxaan ku xusuustaa Magaca Eebe, ee u nicmoon, ee u naxariista. Dheh: Waxaan Eebe ka magan gali magaca Eebaha Dadka, Boqorka Dadka, Ilaaha Dadka, Sharka waswaaska qarsoon, ee waswaasiya laabta dadka, ka mid ah Jinniga iyo Dadka."
  };
  return translations[surahId] || "Macnaha suuradan...";
};

const QuranPopup = ({ surah, isOpen, onClose }) => {
  if (!isOpen || !surah) return null;

  // Sample Quran verses
  const sampleVerses = {
    1: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,

    114: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَٰهِ النَّاسِ
مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ`
  };

  const getQuranText = () => {
    return sampleVerses[surah.id] || `Quraanka Suuratul ${surah.magaca} waxa ku jira ${surah.aayado} aayad.`;
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>Quraanka Suuratul {surah.magaca}</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="popup-body">
          <div className="surah-info">
            <p><strong>Lambarka:</strong> {surah.id}</p>
            <p><strong>Aayadaha:</strong> {surah.aayado}</p>
            <p><strong>Bogga:</strong> {surah.bogga}</p>
            <p><strong>Juz:</strong> {surah.juz}</p>
          </div>
          <div className="quran-text">
            <div className="arabic-text">
              {getQuranText().split('\n').map((verse, index) => (
                <p key={index} className="quran-verse">
                  {verse}
                </p>
              ))}
            </div>
            <div className="translation">
              <p><em>Macnaha:</em> {getTranslation(surah.id)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranPopup; // MAKE SURE THIS LINE EXISTS