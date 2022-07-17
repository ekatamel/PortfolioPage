<?php namespace 

App\Http\Controllers; 
use Illuminate\Http\Request; 
use App\Models\Contact; 
use Mail; 

class ContactController extends Controller { 

      public function index() { 

       return view('contact-us'); 
     } 

      public function save(Request $request) { 

        $this->validate($request, [
            'name' => "required|regex:/^[\pL\s\-]+$/u",
            'email' => 'required|email',
            'message' => 'required|min:10'
        ], [
          'name.regex' => "The name could contain only letters, hyphens and spaces"
        ]);

        $contact = new Contact;

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->message = $request->message;

        $contact->save();

        \Mail::send('contact_email',
             array(
                 'name' => $request->get('name'),
                 'email' => $request->get('email'),
                 'user_message' => $request->get('message'),
             ), function($message) use ($request)
               {
                  $message->from($request->email);
                  $message->to('katerinka.melnichuk@gmail.com');
               });
        
        return back()->with('success', 'Thank you for contact us!');
    }


}