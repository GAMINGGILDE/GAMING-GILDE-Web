
Weitere Features:
- E-Mail-Adresse im Impressum "maskieren" bitte.
  - Die ist maskiert oder irre ich mich?
  - Nö, im Code steht die direkt (auslesbar) drin:
    ```
    <a className="text-primary underline" href="mailto:webmaster@anti-corona-kartell.de" target="_blank">webmaster@anti-corona-kartell.de</a>
    ```
    Um für Web Crawler, Scanner etc. das Auslesen der E-Mail-Adresse (von wegen mit Spam zugeschüttet zu werden) zu verhindern, hatte ich früher folgendes verwendet:
    ```
    <script TYPE="text/javascript">
      emailE = 'anti-corona-kartell.de'
      emailE = ('webmaster' + '@' + emailE)
      document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')
    </script>
    ```
    Das oder so ähnlich sollte bitte auch für die E-Mail Adresse hier Anwendung finden.


- Bitte die Game-Images in den Kacheln auf Gameserver größer. Klasse wären auch runde Ecken.
  - Ist mir immer noch zu klein. Ich hatte mir das so vorgestellt:
    ![img.png](img.png)


- Icons im Footer:
  Entweder: den Style der Icons für Datenschutz und Impressum auf das Design der anderen Icons ändern. Wenn du was vergleichbares für die beiden findest, wäre das auch ok.
  
  Oder: die beigefügten Icons (siehe asset-Ordner: Bluesky.svg, discord.svg, steam.svg und yourtube.svg) für Discrod, Steam, Bluesky und YouTube verwenden.
  
  Die Icons natürlich dann bitte auch farblich so wie Impressum und Datenschutz.