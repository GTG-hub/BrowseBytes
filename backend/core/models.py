from django.db import models
from django.contrib.auth.models import BaseUserManager , AbstractBaseUser

article_titles=[]

INTERACTIONS=(
    ('Saved','Saved'),
    ('Viewed','Viewed')
)

#Creating user manager
class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, password2 = None):
        """
        Creates and saves a User with the given email, name and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name = name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, password2 = None):
        """
        Creates and saves a superuser with the given email, name and password.
        """
        user = self.create_user(
            email,
            name = name,
            password=password
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


#custom user model
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length = 50)
    created_at  = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

class Author(models.Model):
    AuthorID = models.AutoField(primary_key=True)
    a_name = models.CharField(max_length = 100)
    email = models.EmailField(verbose_name="email address", max_length= 255)

    def __int__(self):
        return self.AuthorID

class Category(models.Model):
    CategoryID = models.AutoField(primary_key=True)
    c_name = models.CharField(max_length = 100)
    class Meta:
        verbose_name_plural = 'Categories'
    def __int__(self):
        return self.CategoryID

class Article(models.Model):
    ArticleID = models.AutoField(primary_key=True)
    title = models.CharField(max_length = 200)
    summary = models.CharField(max_length = 10000)
    AuthorID = models.ForeignKey(Author, on_delete=models.CASCADE)
    CategoryID = models.ForeignKey(Category, on_delete= models.CASCADE)
    Link_article = models.URLField(max_length=300, default="N/A")
    def __int__(self):
        return self.ArticleID

class searchHistory(models.Model):
    HistoryID = models.AutoField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete = models.CASCADE)
    query = models.CharField(max_length = 200)
    class Meta:
        verbose_name_plural = "Search_Histories"


class user_article_interaction(models.Model):
    InteractionID = models.CharField(max_length=100, choices=INTERACTIONS, default="Viewed")
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    ArticleID = models.ForeignKey(Article, on_delete=models.CASCADE)
    def __str__(self):
        return self.InteractionID


class article_author(models.Model):
    ArticleID = models.ForeignKey(Article, on_delete=models.CASCADE)
    AuthorID = models.ForeignKey(Author,on_delete=models.CASCADE)


