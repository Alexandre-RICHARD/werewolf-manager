# Version 0

<details>

### 0.1.0 `17 février 2024`

-   Copy of starter Vite/React to reset the project

### 0.2.0 `17 février 2024`

-   Added changelog to keep trace of all futur changes
-   Change index.HTML title
-   Update dependencies
-   Update name and repo link in package.json
-   Change favicon to right one
-   Re arrange IndexImporter
-   Delete all starter content
-   Change Font-Family of project from Poppins to Inknut Antiqua
-   Added alias to the project

### 0.2.1 `17 février 2024`

-   Added react-router-dom to the project
-   Added 'specials' to the alias
-   Create Component 'AppRouter' in special, wich contain React Router in futur
-   Transform export default to named export
-   Added slice and add it to redux

### 0.2.2 `17 février 2024`

-   Create 5 components that will be the main one of the app
-   Create routes in React Router component

### 0.2.3 `17 février 2024`

-   Added some colors variables
-   Create two dev component to help in futur
-   Create base of App component with background image

### 0.2.4 `17 février 2024`

-   Create basic navigation around five main pages
-   Added homeIcon to allow to return to HomePage in other page

### 0.2.5 `17 février 2024`

-   Create Checkbox component to handle all boolean input in the futur
-   Added WakeorSleepScreen option to DevOption and show info in devInfo

### 0.2.6 `18 février 2024`

-   Added Steps.json data file, to got all step wich will append during game
-   Added GameStep component, to handle the sequence of step

### 0.2.7 `18 février 2024`

-   Added a dedicated component to the next step button
-   Added a dedicated utilitie file to handle the logic in searching the next valid step
-   Move ShowSleepOrAwakeScreen in GameData object in slice
-   Added some new variable in this object
-   Added them to dev info component, arrange style to more readability
-   Added types .d.ts files to handle GameData and Steps types

### 0.2.8 `18 février 2024`

-   Find a good way to return the right index in stepFinder. Added condition will be easy in futur
-   Apply Prettier and Eslint in all files

### 0.2.9 `18 février 2024`

-   Change in wakeScreen conditional function in stepFinder, response become return
-   Added Select input in DevOptions to handle change of app screen size
-   This params handle classname attribution

### 0.2.10 `28 février 2024`

-   Added content to HomePage, and to have image, added ImageImporter file
-   Update dependencies

### 0.2.11 `1er mars 2024`

-   Update dependencies
-   Added new component AppButton to handle all current and futur button of the app, wich will be uniform
-   Added title to Dev Box
-   Replace 'Option' button to access option menu by gearIcon, new SVG component
-   Move AppRouter outside of its folder, because it doesn't have SCSS file
-   Change route of /game to /game/* to handle all Game Routes associeted in another router, GameRouter
-   Thus, AppRouter, on the route /game/* call GameRouter wich handle rest of routes and deletion of GamePage component
-   Added the first element of Game Configuration, with the Player Number Selector, with Range input

### 0.2.12 `2 mars 2024`

-   Added image of the game roles, they are the same like board game cards
-   Change Slider component's name to PlayerNumber
-   Added roles.json file, wich describe the basic data of each role
-   Move HomeIcon and OptionsGear outside of their folder beaucse they don't have scss file
-   Create file for futur BackIcon svg component
-   Transfer of the top of CreateCompo file to a dedicated component, wich handle title and link to go back
-   Starting of the creation of parts wich handle the composition of game's roles

### 0.2.13 `2 mars 2024`

-   Added a minus and plus icon as SVGs components
-   Remove the border-radius of the app and increase padding of it
-   Little change on DevParts, added a new font to contrast with the app
-   Added a new font for number, because those of Inknut Antiqua are not aligned
-   Added 'composition' object in slice to handle futur entry of the game composition
-   Added types to handle it
-   Create new component for the selection of role in composition
-   Create div for each role, no logic implemented, so nothing work for now
-   Given that 'role' from roles.json is passed as props, creation of a type file

### 0.2.14 `2 mars 2024`

-   Added new Types for the new Array in slice : Composition, different array from PlayerData
-   Playerdata will be used for game, while Composition will be used for create the game with role selection
-   Default app size (dev variable) is now on 480px
-   Added all the logic to change the composition, changing quantity of each role
-   Button that can't be used will be hidden

### 0.2.15 `3 mars 2024`

-   Initializing gameData.composition to avoid having to do it when loading component RoleSelection
-   Correct the error of unique key in RolesChoice by replacing <></> with React.Fragment
-   Remake of all composition choice logic to handle more possibility and avoid bugs
-   Some css change, with element pointer's event, size and position
-   Remove the balance score of roles to make room and have a more understandable interface

### 0.2.16 `3 mars 2024`

-   Fix sccs to have both visual transition when one role is selected

### 0.2.17 `4 mars 2024`

-   Update dependencies
-   Install mode checker to build application with only the app, without dev parts
-   Update SCSS style to match with this change and make ther render correctly even in prod

### 0.2.18 `4 mars 2024`

-   In roles.json, change of the group belongs to the comédien
-   Definition of the role selected and needed on the top of composition choice menu

### 0.2.19 `5 mars 2024`

-   Update dependencies
-   Added input range, disabled, to indicate the current balancing score with markers
-   Added utilitie file to calculate the value of all markers

### 0.2.20 `6 mars 2024`

-   Added some comments to indicate which line of code should be deleted when the project is finished
-   Added a new dev resolution to be conform with an average of nowadays phone
-   In PlayerNumber, replace the - and + button by their respectives SVG icon components
-   Added a section style, wich will be used to add light background to important block
-   Adding a div around main in order to manage the padding correctly with a percentage

### 0.3.0 `7 mars 2024`

-   Update dependencies
-   Deletion of rangeMarkerFinder, because of the strategy change to handle the balance display
-   Lots of change in GameBalanceScore, including lots styles and factorizing

### 0.3.1 `8 mars 2024`

-   Update dependencies
-   Move variable of range input to global variable.scss
-   Change method to handling animation change value. From setTimeout to requestAnimationFrame
-   Move the 'hidden' logic class for message to dedicated variable
-   Move the slider Value div to a dedicated component
-   When slider move, the valueDiv move with it, and its border color change to match with the input range

### 0.3.2 `8 mars 2024`

-   Move all style : font-family: Amita to a specific class in index.scss to handle all app numbers

### 0.3.3 `8 mars 2024`

-   Added somes style to correctly handle the size of few elements in GameBalanceScore
-   Added lot of new markers, it's no longer every 10, but every 2, the tens are more visible

</details>