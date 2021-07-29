import React from 'react';
import './App.global.css';

const test = {
  width: '100%',
  height: '500px',
};

export default function App() {
  return (
    <div style={test}>
      <iframe
        className="w-full h-96"
        title="Test"
        src="http://visualizer.andersen.ixperiential.com/?vcnf={%22Interior_Color%22:%22White%22,%22Exterior_Color%22:%22White%22,%22Glass_Pattern_S1%22:%22No Pattern%22,%22Hardware_Style%22:%22White%22,%22Screen_Size%22:%22Full Screen%22,%22Screen_Type%22:%22No Screen%22,%22Screen_Color%22:%22White%22,%22Glazing_S1%22:%22High Performance%22,%22Tempered_S1%22:%22false%22,%22Breather_Tubes%22:%22false%22,%22Grille_Pattern_S1%22:%22No Grilles%22,%22Exterior_Trim%22:%22None%22,%22Grille_Style%22:%22Interior Wood Only (INTW)%22,%22Lites_Wide_S1%22:2,%22Lites_High_S1%22:2,%22Wide_Bar%22:%22false%22,%22Glass_Black_Out%22:%22false%22,%22width%22:16.5,%22height%22:27.75,%22clone%22:%221%22,%22Locks_Sash%22:1,%22Glass_Pattern_S2%22:%22No Pattern%22,%22Glazing_S2%22:%22High Performance%22,%22Tempered_S2%22:%22false%22,%22Frame_Type%22:%22Flat Sill Insert%22,%22Grille_Pattern_S2%22:%22No Grilles%22,%22Lites_Wide_S2%22:2,%22Lites_High_S2%22:2,%22Standard_Color_Lift%22:%22true%22,%22Standard_Color_Finger_Lift%22:%22false%22,%22Estate_Finish_Hand_Lift%22:%22false%22,%22Estate_Finish_Finger_Lift%22:%22false%22,%22Checkrail_Style%22:%22Contemporary%22,%22sash%22:%221:1%22,%22Product_Category%22:%22Double-Hung%22,%22Product_Sub_Category%22:%22Double-Hung%22,%22_modelName%22:%22Double-Hung Flat Sill Insert%22,%22PRODUCT%22:%22Double-Hung%22,%22Product_Type%22:%22Window%22}&showcase=true"
      />
      <div className="w-full h-96 bg-green-300">TEsting</div>
    </div>
  );
}
