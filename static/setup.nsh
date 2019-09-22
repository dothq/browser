!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "Dot" "Software\Clients\StartMenuInternet\Dot\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\Dot" "" "Dot HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\Application" "AppUserModelId" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\Application" "ApplicationIcon" "$INSTDIR\Dot.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\Application" "ApplicationName" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\Application" "ApplicationCompany" "Dot"      
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\Application" "ApplicationDescription" "A beautiful browser with material UI, with built-in adblock, based on Wexond."      
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\DefaultIcon" "DefaultIcon" "$INSTDIR\Dot.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\Dot\shell\open\command" "" '"$INSTDIR\Dot.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "Dot" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "Dot" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot" "" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\DefaultIcon" "" "$INSTDIR\Dot.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities" "ApplicationDescription" "A beautiful browser with material UI, with built-in adblock, based on Wexond."
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities" "ApplicationName" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities" "ApplicationIcon" "$INSTDIR\Dot.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities\FileAssociations" ".htm" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities\FileAssociations" ".html" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities\URLAssociations" "http" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities\URLAssociations" "https" "Dot"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\Capabilities\StartMenu" "StartMenuInternet" "Dot"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot\shell\open\command" "" "$INSTDIR\Dot.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\Dot"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\Dot"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "Dot"
!macroend