---
layout: page
title: Termux:API add-on
---

This add-on exposes device API:s for use from the command line or scripts.

There are two parts required to install in order for this to work:
      
- The Termux:API app which contains the necessary end points.
  - [Install the app from Google Play](https://play.google.com/store/apps/details?id=com.termux.api)
- The _termux-api_ apt package which contains scripts for calling the API methods.
  - Install by executing: `apt install termux-api`
        
Below follows a listing of the available API methods.

# termux-battery-status
~~~~~~~~
Usage: termux-battery-status
Get the status of the device battery.
~~~~~~~~

# termux-camera-info
~~~~~~~~
Usage: termux-camera-info
Get information about device camera(s).
~~~~~~~~

# termux-camera-photo
~~~~~~~~
Usage: termux-camera-photo [-c camera-id] output-file
Take a photo and save it to a file in JPEG format.

  -c camera-id  ID of the camera to use (see termux-camera-info), default: 0
~~~~~~~~

# termux-clipboard-get
~~~~~~~~
Usage: termux-clipboard-get
Get the system clipboard text.
~~~~~~~~

# termux-clipboard-set
~~~~~~~~
Usage: termux-clipboard-set [text]
Set the system clipboard text. The text to set is either supplied as arguments or read from stdin if no arguments are given.
~~~~~~~~

# termux-contact-list
~~~~~~~~
Usage: termux-contact-list
List all contacts.
~~~~~~~~

# termux-dialog
~~~~~~~~
Usage: termux-dialog [-i hint] [-m] [-p] [-t title]
Show a text entry dialog.

  -i hint   the input hint to show when the input is empty
  -m        use a textarea with multiple lines instead of a single
  -p        enter the input as a password
  -t title  the title to show for the input prompt
~~~~~~~~

# termux-download
~~~~~~~~
Usage: termux-download [-d description] [-t title] url-to-download
Download a resource using the system download manager.

  -d description  description for the download request notification
  -t title        title for the download request notification
~~~~~~~~

# termux-infrared-frequencies
~~~~~~~~
Usage: termux-infrared-frequencies
Query the infrared transmitter's supported carrier frequencies.
~~~~~~~~

# termux-infrared-transmit
~~~~~~~~
Usage: termux-infrared-transmit -f frequency pattern
Transmit an infrared pattern. The pattern is specified in comma-separated on/off intervals, such as '20,50,20,30'. Only patterns shorter than 2 seconds will be transmitted.

  -f frequency  IR carrier frequency in Hertz
~~~~~~~~

# termux-location
~~~~~~~~
usage: termux-location [-p provider] [-r request]
Get the device location.

  -p provider  location provider [gps/network/passive] (default: gps)
  -r request   kind of request to make [once/last/updates] (default: once)
~~~~~~~~

# termux-notification
~~~~~~~~
Usage: termux-notification [-c content] [-i id] [-t title] [-u url]
Display a system notification.

  -c content notification content to show
  -i id      notification id (will overwrite any previous notification
               with the same id)
  -t title   notification title to show
  -u url     notification url when clicking on it
~~~~~~~~

# termux-share
~~~~~~~~
Usage: termux-share [-a action] [-c content-type] [-d] [-t title] [file]
Share a file specified as argument or the text received on stdin if no file argument is given.

  -a action        which action to performed on the shared content:
                     edit/send/view (default:view)
  -c content-type  content-type to use (default: guessed from file extension,
                     text/plain for stdin)
  -d               share to the default receiver if one is selected
                     instead of showing a chooser
  -t title         title to use for shared content (default: shared file name)
~~~~~~~~

# termux-sms-inbox
~~~~~~~~
Usage: termux-sms-inbox [-d] [-l limit] [-n] [-o offset]
List received SMS messages.

  -d         show dates when messages were created
  -l limit   offset in sms list (default: 10)
  -n         show phone numbers
  -o offset  offset in sms list (default: 0)
~~~~~~~~

# termux-sms-send
~~~~~~~~
Usage: termux-sms-send -n number[,number2,number3,...] [text]
Send a SMS message to the specified recipient number(s). The text to send is either supplied as arguments or read from stdin if no arguments are given.

  -n number(s)  recipient number(s) - separate multiple numbers by commas
~~~~~~~~

# termux-telephony-cellinfo
~~~~~~~~
Usage: termux-telephony-cellinfo
Get information about all observed cell information from all radios on the device including the primary and neighboring cells.
~~~~~~~~

# termux-telephony-deviceinfo
~~~~~~~~
Usage: termux-telephony-deviceinfo
Get information about the telephony device.
~~~~~~~~

# termux-toast
~~~~~~~~
Usage: termux-toast [-s] [text]
Show text in a Toast (a transient popup). The text to show is either supplied as arguments or read from stdin if no arguments are given.

 -s  only show the toast for a short while
~~~~~~~~

# termux-tts-engines
~~~~~~~~
Usage: termux-tts-engines
Get information about the available text-to-speech (TTS) engines. The name of an engine may be given to the termux-tts-speak command using the -e option.
~~~~~~~~

# termux-tts-speak
~~~~~~~~
Usage: termux-tts-speak [-e engine] [-l language] [-p pitch] [-r rate] [-s stream] [text-to-speak]
Speak text with a system text-to-speech (TTS) engine. The text to speak is either supplied as arguments or read from stdin if no arguments are given.

  -e engine    TTS engine to use (see termux-tts-engines)
  -l language  language to speak in (may be unsupported by the engine)
  -p pitch     pitch to use in speech. 1.0 is the normal pitch,
                 lower values lower the tone of the synthesized voice,
                 greater values increase it.
  -r rate      speech rate to use. 1.0 is the normal speech rate,
                 lower values slow down the speech
                 (0.5 is half the normal speech rate)
                 while greater values accelerates it
                 (2.0 is twice the normal speech rate).
  -s stream    audio stream to use (default:NOTIFICATION), one of:
                 ALARM, MUSIC, NOTIFICATION, RING, SYSTEM, VOICE_CALL
~~~~~~~~

# termux-vibrate
~~~~~~~~
Usage: termux-vibrate [-d duration] [-f]
Vibrate the device.

  -d duration  the duration to vibrate in ms (default:1000)
  -f           force vibration even in silent mode
~~~~~~~~

