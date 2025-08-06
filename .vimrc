for prefix in ['i', 'n', 'v']
  for key in ['<Up>', '<Down>', '<Left>', '<Right>']
    exe prefix . "noremap " . key . " <Nop>"
  endfor
endfor

set guioptions-=T
set guioptions-=m
set mouse=
set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [POS=%04l,%04v]\ [LEN=%L]
set guifont=Courier\14
set wildmenu
set number

nmap j gj
nmap <down> gj
nmap k gk
nmap <up> gk

map <silent> <F8>   :Explore<CR>
map <silent> <S-F8> :sp +Explore<CR>
