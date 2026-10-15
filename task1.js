class FoodProduct {
  constructor(title, category, brand, manufactureDate) {
    this.title = title;
    this.category = category;
    this.brand = brand;
    this.manufactureDate = manufactureDate;
  }
  get ageInDays() {
    const now = new Date();
    const diffInMilliseconds = now - this.manufactureDate;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    return Math.floor(diffInMilliseconds / millisecondsInDay);
  }

  getFullInfo() {
    return `Назва: ${this.title}, Категорія: ${this.category}, Бренд: ${this.brand}, Вік (днів): ${this.ageInDays}`;
  }
}
class DiscountedProduct extends FoodProduct {
  constructor(title, category, brand, manufactureDate, maxDiscountLimit) {
    super(title, category, brand, manufactureDate);
    this.maxDiscountLimit = maxDiscountLimit;
    this.currentDiscount = 0;
  }

  applyDiscount(percent) {
    if (percent <= this.maxDiscountLimit) {
      this.currentDiscount = percent;
      return true;
    }
    return false;
  }

  getFullInfo() {
    const baseInfo = super.getFullInfo();
    return `${baseInfo}, Поточна знижка: ${this.currentDiscount}%, Макс. знижка: ${this.maxDiscountLimit}%`;
  }
}
const dateMilk = new Date();
dateMilk.setDate(dateMilk.getDate() - 5);

const milk = new FoodProduct("Молоко 2.5%", "Молочка", "Яготинське", dateMilk);
console.log("--- Тест FoodProduct ---");
console.log(milk.getFullInfo());
const dateCake = new Date();
dateCake.setDate(dateCake.getDate() - 2);

const cake = new DiscountedProduct("Торт Світоч", "Випічка", "Світоч", dateCake, 50);

console.log("\n--- Тест DiscountedProduct ---");
console.log(cake.getFullInfo());

console.log("\nСпроба встановити знижку 30%:");
const isApplied1 = cake.applyDiscount(30);
console.log(`Успішно? ${isApplied1}`); 
console.log(cake.getFullInfo());

console.log("\nСпроба встановити знижку 60%:");
const isApplied2 = cake.applyDiscount(60);
console.log(`Успішно? ${isApplied2}`); 
console.log(cake.getFullInfo());