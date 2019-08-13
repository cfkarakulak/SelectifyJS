### selectifyJS
Turn your boring native select elements into something beautiful.
This markdown is currently incomplete and to be completed soon.

#### Install Using Package Managers

```sh
# Bower
bower install --save selectifyjs

# NPM
npm install selectifyjs
```

#### Import Library

```javascript
import 'selectifyjs';
```

#### Initialize Plugin

```html
<select name="months" data-selectify data-filter="What month should i look for ?">
  <optgroup label="Months">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </optgroup>
</select>
```

Example: select elements having ```multiple``` attribute.

```html
<select name="names[]" multiple data-selectify data-placeholder="Choose a name" data-filter="Type anything to search...">
  <optgroup label="Fake Names" data-content="<i>*</i><span>($content)</span>">
    <option value="Mario Speedwagon">Mario Speedwagon</option>
    <option value="Petey Cruiser">Petey Cruiser</option>
    <option value="Anna Sthesia">Anna Sthesia</option>
    <option value="Gail Forcewind">Gail Forcewind</option>
    <option value="Nick R. Bocker">Nick R. Bocker</option>
    <option value="Ira Membrit">Ira Membrit</option>
    <option value="Sue Vaneer">Sue Vaneer</option>
    <option value="Sal Monella">Sal Monella</option>
    <option value="Jimmy Changa">Jimmy Changa</option>
    <option value="Cory Ander">Cory Ander</option>
    <option value="Don Stairs">Don Stairs</option>
    <option value="Moe Fugga">Moe Fugga</option>
    <option value="Graham Cracker">Graham Cracker</option>
    <option value="Tom Foolery">Tom Foolery</option>
    <option value="Holly Graham">Holly Graham</option>
    <option value="Polly Tech">Polly Tech</option>
    <option value="Pat Agonia">Pat Agonia</option>
    <option value="Phil Harmonic">Phil Harmonic</option>
    <option value="Donatella Nobatti">Donatella Nobatti</option>
  </optgroup>
</select>
```

```javascript
const selectify = $('select[data-selectify]').selectify({
  initialize: ($element) => {},
});
```

#### Setting up development environment

You can go ahead and play around with ```src/example/index.html``` after running the commands below.

```
# 1. fetch project
git clone git@github.com:cfkarakulak/SelectifyJS.git

# 2. change directory to selectifyjs and install dependencies
npm install

# 3. compile and listen for changes
npm run watch
```
