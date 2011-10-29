// CONVENIENCE SETTERS
Date.prototype.yesterday = function() {
  this.lastDay();
  return this;
}

Date.prototype.lastDay = function() {
  this.setDate(this.getDate() - 1 );
  return this;
}

Date.prototype.tomorrow = function() {
  return this.nextDay();
}

Date.prototype.nextDay = function() {
  this.setDate(this.getDate() + 1 );
  return this;
}

Date.prototype.lastWeek = function() {
  this.setDate(this.getDate() - 7 );
  return this;
}

Date.prototype.beginningOfWeek = function() {
  while(!this.isMonday()) {
    this.lastDay();
  }
  return this;
}

Date.prototype.endOfWeek = function() {
  while(!this.isSunday()) {
    this.nextDay();
  }
  return this;
}

Date.prototype.nextWeek = function() {
  this.setDate(this.getDate() + 7 );
  return this;
}

// CONVENIENCE GETTERS
Date.prototype.isMonday = function()    { return this.getDay() == 1; }
Date.prototype.isThuesday = function()  { return this.getDay() == 2; }
Date.prototype.isWednesday = function() { return this.getDay() == 3; }
Date.prototype.isThursday = function()  { return this.getDay() == 4; }
Date.prototype.isFriday = function()    { return this.getDay() == 5; }
Date.prototype.isSaturday = function()  { return this.getDay() == 6; }
Date.prototype.isSunday = function()    { return this.getDay() == 0; }

Date.prototype.isToday = function() { 
  return this.toStringDBDate() == new Date().toStringDBDate(); 
}

// OUTPUT FORMATTING
Date.prototype.toStringDBDate = function(format) {
  var d = "0" + this.getDate();
  var m = "0" + (this.getMonth() + 1);
  var y = this.getYear() + 1900;
  return y + "-" + m.slice(-2) + "-" + d.slice(-2);
}

Date.prototype.toStringDayName = function(format) {
  var d = "0" + this.getDate();
  var m = "0" + (this.getMonth() + 1);
  var y = this.getYear() + 1900;
  return y + "-" + m.slice(-2) + "-" + d.slice(-2);
}

Date.prototype.toStringDayNumberFixed = function(format) {
  var d = "0" + this.getDate();
  return d.slice(-2);
}

Date.prototype.toStringDayNumber = function(format) {
  return this.getDate();
}

Date.prototype.toStringDayName = function(format) {
  return Date.prototype.DAYNAMES[this.getDay()];
}

Date.prototype.toStringDayAbbreviation = function(format) {
  return Date.prototype.SHORTDAYNAMES[this.getDay()];
}

Date.prototype.toStringMonthAbbreviation = function(format) {
  return Date.prototype.SHORTMONTHNAMES[this.getMonth()];
}

// I18N
Date.prototype.DAYNAMES = [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ];
Date.prototype.SHORTDAYNAMES = [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ];
Date.prototype.SHORTMONTHNAMES = [ "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez" ];