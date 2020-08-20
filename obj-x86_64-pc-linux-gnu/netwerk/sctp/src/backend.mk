# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -D__Userspace__=1 -DSCTP_SIMPLE_ALLOCATOR=1 -DSCTP_PROCESS_LEVEL_LOCKS=1 -DSCTP_DEBUG=1 -D_GNU_SOURCE=1
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/base
CSRCS += $(srcdir)/netinet/sctp_asconf.c
CSRCS += $(srcdir)/netinet/sctp_auth.c
CSRCS += $(srcdir)/netinet/sctp_bsd_addr.c
CSRCS += $(srcdir)/netinet/sctp_callout.c
CSRCS += $(srcdir)/netinet/sctp_cc_functions.c
CSRCS += $(srcdir)/netinet/sctp_crc32.c
CSRCS += $(srcdir)/netinet/sctp_indata.c
CSRCS += $(srcdir)/netinet/sctp_input.c
CSRCS += $(srcdir)/netinet/sctp_output.c
CSRCS += $(srcdir)/netinet/sctp_pcb.c
CSRCS += $(srcdir)/netinet/sctp_peeloff.c
CSRCS += $(srcdir)/netinet/sctp_sha1.c
CSRCS += $(srcdir)/netinet/sctp_ss_functions.c
CSRCS += $(srcdir)/netinet/sctp_sysctl.c
CSRCS += $(srcdir)/netinet/sctp_timer.c
CSRCS += $(srcdir)/netinet/sctp_userspace.c
CSRCS += $(srcdir)/netinet/sctp_usrreq.c
CSRCS += $(srcdir)/netinet/sctputil.c
CSRCS += $(srcdir)/netinet6/sctp6_usrreq.c
CSRCS += $(srcdir)/user_environment.c
CSRCS += $(srcdir)/user_mbuf.c
CSRCS += $(srcdir)/user_recv_thread.c
CSRCS += $(srcdir)/user_socket.c
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
