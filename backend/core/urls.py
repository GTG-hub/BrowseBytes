from django.urls import path, include
from core.views import *
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name = 'login'),
    path('profile/', UserProfileView.as_view(), name ='profile'),
    path('changepw/', UserChangePasswordView.as_view(), name ='changepw'),
    # path('resetpwmail/', SendResetPwEmailView.as_view(), name ='resetpwmail'),
    path('resetpw/<uid>/<token>', UserPasswordResetView.as_view(), name = 'resetpw')
]
