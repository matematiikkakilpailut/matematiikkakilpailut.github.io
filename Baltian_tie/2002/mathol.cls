%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% File MATHOL.CLS (for use with math olympiad materials in LaTeX2e)
%

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{mathol}
   [1994/11/05 v1.0 For math olympiad materials]

\DeclareOption*{%
  \PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions

\LoadClass{article}[1994/07/13]

\DeclareFontFamily{OT1}{cyr}{}
\DeclareFontShape{OT1}{cyr}{m}{n}
      {
      <5> <6> <7> <8> <9> <10> gen * wncyr
      <9.5> <9.7> <9.8> <10.95> <12> <14.4> <17.28> <20.74> <24.88> wncyr10
      }{}
\DeclareFontShape{OT1}{cyr}{bx}{n}
      {
      <5> <6> <7> <8> <9> <10> gen * wncyb
      <9.5> <10.95> <12> <14.4> <17.28> <20.74> <24.88> wncyb10
      }{}
\DeclareFontShape{OT1}{cyr}{m}{it}
      {
      <5> <6> <7> <8> <9> <10> gen * wncyi
      <9.5> <10.95> <12> <14.4> <17.28> <20.74> <24.88> wncyi10
      }{}

\DeclareFixedFont{\twelvebf}{OT1}{cmr}{bx}{n}{12}
\DeclareFixedFont{\xtwelvebf}{OT1}{cmr}{bx}{n}{14.4}
\DeclareFixedFont{\rtwelvebf}{OT1}{cyr}{bx}{n}{12}
\DeclareFixedFont{\ninerm}{OT1}{cmr}{m}{n}{9}
\DeclareFixedFont{\rninerm}{OT1}{cyr}{m}{n}{8}

\DeclareFontFamily{OMS}{ama}{}
\DeclareFontFamily{OMS}{amb}{}
\DeclareFontShape{OMS}{ama}{m}{n}
      {
      <5> <6> <7> <8> <9> <10> gen * msam
      <10.95> <12> <14.4> <17.28> <20.74> <24.88> msam10
      }{}
\DeclareFontShape{OMS}{amb}{m}{n}
      {
      <5> <6> <7> <8> <9> <10> gen * msbm
      <10.95> <12> <14.4> <17.28> <20.74> <24.88> msbm10
      }{}

\DeclareSymbolFont{msam}{OMS}{ama}{m}{n}
\DeclareSymbolFont{msbm}{OMS}{amb}{m}{n}

\DeclareMathSymbol{\geq}{\mathrel}{msam}{"3E}
\DeclareMathSymbol{\leq}{\mathrel}{msam}{"36}
\DeclareMathSymbol{\N}{\mathord}{msbm}{"4E}
\DeclareMathSymbol{\Z}{\mathord}{msbm}{"5A}
\DeclareMathSymbol{\Q}{\mathord}{msbm}{"51}
\DeclareMathSymbol{\R}{\mathord}{msbm}{"52}

\newcommand{\rrm}{\fontfamily{cyr}\fontseries{m}\selectfont}
\newcommand{\rbf}{\fontfamily{cyr}\fontseries{bx}\selectfont}

\def\pr#1{\par\noindent%
  \hbox to 0pt{\hss #1.\kern0.6em}\ignorespaces}

\long\def\picprob#1#2#3#4#5#6#7{
\medskip
\newbox\textbox\newbox\picbox
\newdimen\picvoffset
\picvoffset=#6pt
\advance\picvoffset by -1ex
\setbox\textbox=\vtop{\par\noindent\hangindent#2cm\hangafter#3%
\hbox to 0pt{\hss #1.\kern0.6em}\ignorespaces{#7}}
\setbox\picbox=\hbox to 0pt{\hss\input{#4}\kern#5pt\null}
\advance\picvoffset by \ht\picbox
\vbox{\null\par\hbox to \textwidth{%
\box\textbox\hfil\vtop{\hbox{\lower\picvoffset\box\picbox}\vskip-3ex\null}}}}

\def\pic#1#2#3{%
\null\par
\newbox\picbox
\setbox\picbox=\hbox to \textwidth{%
\hskip0pt plus#1fil\kern\leftskip\null\kern-3ex%
\input{#3}\hskip0pt plus#2fil}
\vtop{\null\par\box\picbox\vskip-3ex\null}}

\def\loe{\vskip0.3ex\advance\leftskip by 2em}
\def\nr#1{\vskip-0.8\parskip\noindent\hbox to 0pt{\hss #1\kern0.6em}\ignorespaces}
\def\endloe{\par\advance\leftskip by -2em}

\newcommand{\ov}{\over\mathstrut}
\newcommand{\dn}[1]{\rule[-#1pt]{0pt}{#1pt}}
\newcommand{\up}[1]{\rule{0pt}{#1pt}}
\newcommand{\ovx}{\up9\ov\dn4}

\newenvironment{problems}%
  {\setlength{\leftskip}{1.5em}}
  {\setlength{\leftskip}{0em}}

\newcounter{joonis}
\newcommand{\pilt}[1]{\refstepcounter{joonis}Joonis~\arabic{joonis}%
\protect\label{#1}}

\pagestyle{empty}
\everymath{\displaystyle}

\setlength{\oddsidemargin}{0pt}%
\setlength{\evensidemargin}{0pt}%
\setlength{\topmargin}{0pt}%
\setlength{\headheight}{0pt}%
\setlength{\headsep}{0pt}

\setlength{\overfullrule}{3pt}
\setlength{\lineskip}{1.5pt}
\setlength{\lineskiplimit}{1.5pt}
\setlength{\parskip}{0.9\baselineskip plus 0.6\baselineskip minus0.3\baselineskip}
\setlength{\mathsurround}{1pt}
\setlength{\parindent}{0pt}
\setlength{\tabskip}{0pt}
\setlength{\arraycolsep}{2pt}
\setlength{\topsep}{0pt}

\tolerance=500
\clubpenalty=2000
\widowpenalty=2000
\interlinepenalty=50
\relpenalty=10000
\binoppenalty=10000

\flushbottom
