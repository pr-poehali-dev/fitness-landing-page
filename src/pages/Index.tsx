import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">FIT COACH</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Твой путь к <span className="text-primary">идеальной форме</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Персональные тренировки с опытным тренером. Результат гарантирован.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="text-lg">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Начать тренировки
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/files/a36b18b3-f15a-4177-afe7-4c706a82a3f0.jpg" 
                alt="Fitness Trainer"
                className="relative rounded-lg shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/baf63578-944c-463e-a35e-2fb3b7b437e5/files/5136e34b-c3d5-4047-a665-83821f7adb72.jpg" 
                alt="Training Session"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Обо мне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я — сертифицированный фитнес-тренер с более чем 7-летним опытом. 
                Моя цель — помочь каждому достичь желаемых результатов через 
                персонализированный подход и научно обоснованные методики.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Сертификатов</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Результат</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Dumbbell" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Персональные тренировки</h3>
                <p className="text-muted-foreground">
                  Индивидуальный подход, составление программы под ваши цели и возможности
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Групповые занятия</h3>
                <p className="text-muted-foreground">
                  Тренировки в небольших группах до 5 человек для максимальной эффективности
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Apple" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Планы питания</h3>
                <p className="text-muted-foreground">
                  Разработка индивидуального рациона для достижения ваших целей
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Video" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Онлайн тренировки</h3>
                <p className="text-muted-foreground">
                  Дистанционные занятия с полным контролем техники выполнения
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Подготовка к соревнованиям</h3>
                <p className="text-muted-foreground">
                  Специализированные программы для спортивных достижений
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Реабилитация</h3>
                <p className="text-muted-foreground">
                  Восстановление после травм под контролем специалиста
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Прайс</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:scale-105 transition-all">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Стартовый</h3>
                  <div className="text-4xl font-bold text-primary">2500₽</div>
                  <div className="text-sm text-muted-foreground">за тренировку</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">1 персональная тренировка</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Консультация по питанию</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Поддержка в чате</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary border-2 hover:scale-105 transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНЫЙ
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Оптимальный</h3>
                  <div className="text-4xl font-bold text-primary">9500₽</div>
                  <div className="text-sm text-muted-foreground">4 тренировки</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">4 персональные тренировки</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">План питания на месяц</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Поддержка 24/7</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Замеры и отчеты</span>
                  </div>
                </div>
                <Button className="w-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:scale-105 transition-all">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Максимальный</h3>
                  <div className="text-4xl font-bold text-primary">18000₽</div>
                  <div className="text-sm text-muted-foreground">8 тренировок</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">8 персональных тренировок</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Индивидуальный план питания</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Поддержка 24/7</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Замеры, отчеты, аналитика</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span className="text-sm">Онлайн доступ к программе</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "За 3 месяца занятий я потеряла 12 кг и полностью изменила свой образ жизни. 
                  Профессиональный подход и постоянная поддержка!"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    АМ
                  </div>
                  <div>
                    <div className="font-semibold">Анна Михайлова</div>
                    <div className="text-sm text-muted-foreground">Клиент 6 месяцев</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Тренировки построены грамотно, всегда интересно и эффективно. 
                  Результаты видны уже через месяц. Рекомендую всем!"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    ДС
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий Соколов</div>
                    <div className="text-sm text-muted-foreground">Клиент 1 год</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Лучший тренер, с которым я работала. Индивидуальный подход, 
                  внимание к деталям и мотивация на каждой тренировке."
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    ЕК
                  </div>
                  <div>
                    <div className="font-semibold">Елена Кузнецова</div>
                    <div className="text-sm text-muted-foreground">Клиент 4 месяца</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Готов ответить на все вопросы и помочь начать путь к твоим целям
          </p>
          
          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших целях..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <div className="font-semibold">+7 (999) 123-45-67</div>
              </div>
            </a>

            <a href="https://t.me/fitcoach" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Telegram</div>
                <div className="font-semibold">@fitcoach</div>
              </div>
            </a>

            <a href="https://instagram.com/fitcoach" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Instagram" className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Instagram</div>
                <div className="font-semibold">@fitcoach</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 FIT COACH. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;