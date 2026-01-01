import React from "react";
import SettingsSidebar from "../components/settings/SettingsSidebar";
import Settings from "../components/settings/Settings";
import { useParams } from "react-router-dom";

function SettingsPage(){
  const { page } = useParams();
  return(
    <div class="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-10 py-8">
      <div class="flex flex-col md:flex-row gap-8">
        <SettingsSidebar />
        <Settings pg={page}/>
      </div>
    </div>
  );
}

export default SettingsPage;