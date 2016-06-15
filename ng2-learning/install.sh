sudo npm install
# Following lines are added as a workaround to https://github.com/angular/angular/issues/4902
npm install -g typings
typings install
npm run tsc
npm start