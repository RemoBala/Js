import statistics
from django.urls import include, path,re_path
from django.contrib.auth.decorators import login_required

from vernonico import settings
from django.urls import include, path,re_path

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

app_name = 'themesettings'

from . import views
#from trade_auctions.views import liveauction

urlpatterns = [
	# path('sample', views.foo, name='sample'),
	# path("mainimg/",views.maintenance_img),
	# path("ipblock/",views.blockip),
	# path("error404/",views.error_404_view),
	# path("read_gunicorn/",views.read_gunicorn_access),
 #    path("delete_gunicorn/",views.delete_read_gunicorn_delete),
 #    path("aboutus/",views.aboutus),
 #    path("howitworks/",views.howitworks),
 #    path("faq/",views.faqshow),
 #    path("terms/",views.terms),
    path('', views.meta,name='meta'),
    path('updateswap_history/',csrf_exempt (views.history)),
    
	
]