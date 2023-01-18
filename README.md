
# Project Title

Merhaba herkese.

Postgresql, Angular ve NodeJs kullanarak kullanıcı yönetim sitemi tasarladım.

## Projede hangi özellikler var
- Kullanıcı listesini görüntüleme
- Kullanıcı ekleme (user ve admin olmak üzere 2 seçenek)
- Kullanıcı silme
- Login / LogOut (username ve password ile)
- Database kayıt

### Kodları kullanmak için yapılması gerekenler

Database bağlantısı için backend kısmında .env dosyası içerisinde ,

```DB_CONNECTION_STRING = YourUserName:YourPassword@YourHostname:5432/YourDatabaseName```

düzenlemesinin yapmalısınız. Gerekli değişiklikler yapıldığında database bağlantısı yapılabilecektir.

Ben kodumu değiştirmeden şu şekilde yayınlıyorum:

```DB_CONNECTION_STRING = postgresql://postgres:12345@localhost:5432/user``` fakat bunu kendi veritabanınıza göre değiştirmelisiniz.

pgAdmin4'ün bilgisayarınızda kurulu olması gerekiyor.


### Veritabanının Ayarlanması
Şimdi de pgAdmin4 tarafındaki detayları halledelim. pgAdmin4 de bir database oluşturun ve o database'e gelip CREATE Script'e tıklayın. Gelen dosya içerisine:

```CREATE TABLE usertable( username TEXT NOT NULL UNIQUE, fullname TEXT NOT NULL, password TEXT NOT NULL, role TEXT NOT NULL )```

yazmanız ve execute etmeniz gerekli. Bu komut tablomuzu oluşturacak. Tables kısmını refresh ettikten sonra usertable adlı tabloyu göreceksiniz.

pgAdmin4 üzerinden kullanıcı eklemeniz gerekecek çünkü sayfa içerisinde bazı url'lere kullanıcı girişi olmadan erişemeyeceğiz.

Kullanıcı eklemek için de:

```INSERT INTO usertable (username, fullname, password, role) VALUES ('ibrahim', 'Ibrahim Aksan',crypt('12345', gen_salt('bf')), 'admin')```

şeklindeki komutu CREATE Script içerisinde execute etmelisiniz. emir adlı kullanıcının şifresini unutmayın çünkü onu login için kullanacaksınız.

### Proje detayları
Add User ve Delete User'a sadece giriş yapmış kullanıcılar erilebilir. Guard kullanıldı.  Bu canActivate ile sağlandı. 

Şifreleri hash lemek için crypt($1, gen_salt('bf') kullanıldı.



### Build
```ng serve --open``` ile frontend i

```nodemon index.js``` ile de backend i çalıştırabilirsiniz.



### Gelecekte Eklenecek Özellikler:
- JWT authentication ile user ve admin'i farkli yetkilendirme.
- Admin olarak giriş yapıldı ise Kullanıcı ekleme, Kullanıcı silme, Kullanıcı silme işlemini yapabilecek.
- Kullanıcı olarak giriş yapıldıysa sadece kullanıcı listesi görüntülenebilecek.
- Kullanıcı detayı görüntülenme eklenecek
- Tasarım güzelleştirilecek




