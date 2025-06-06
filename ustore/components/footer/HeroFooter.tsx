"use client";
import React from "react";

import { Divider } from "@heroui/react";

import { DiscordIcon,  } from "../ui/icons/social-media-icons/discord";
import { LinkedinIcon } from "../ui/icons/social-media-icons/linkedin";
import { GithubIcon } from "../ui/icons/social-media-icons/github";
import { TwitterIcon } from "../ui/icons/social-media-icons/twitter";
import { InstagramIcon } from "../ui/icons/social-media-icons/instagram";
import { YoutubeIcon } from "../ui/icons/social-media-icons/youtube";
import { MapPinIcon } from "../ui/icons/common-icons/map-pin";
import { ClockIcon } from "../ui/icons/common-icons/clock";
import { AtSignIcon  } from "../ui/icons/common-icons/at-sign";
import { Logo } from "../ui/logo";
import { MessageCircleDashedIcon } from "../ui/icons/common-icons/message-circle-dashed";
import { SocialLink } from "./HeroFooterSocialLink";
import { HeroFooterItem } from "@/components/footer/HeroFooterItem"
import { HeroFooterItemIcon } from "./HeroFooterItemIcon";

export const HeroFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-transparent text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-white mb-4">
              A melhor experiência de compra online com produtos de qualidade e atendimento excepcional.
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://github.com/KarlosNiel/UStore-ecommerce" icon={<GithubIcon />} />
              <SocialLink href="https://www.linkedin.com/in/carlos-daniel-11628a288/" icon={<LinkedinIcon />} />
              <SocialLink href="#" icon={<DiscordIcon />} />
              <SocialLink href="#" icon={<TwitterIcon />} />
              <SocialLink href="#" icon={<InstagramIcon/>} />
              <SocialLink href="#" icon={<YoutubeIcon />} />
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2 flex flex-col">
              <HeroFooterItem href="#" nome="Homepage" />
              <HeroFooterItem href="#" nome="Blog" />
              <HeroFooterItem href="#" nome="Trabalhe Conosco" />
              <HeroFooterItem href="#" nome="Termos de Serviço" />
              <HeroFooterItem href="#" nome="Política de Privacidade" />
            </ul>
          </div>

          {/* Conta */}
          <div>
            <h4 className="font-bold text-lg mb-4">Minha Conta</h4>
            <ul className="space-y-2 flex flex-col">
              <HeroFooterItem href="#" nome="Minha Conta" />
              <HeroFooterItem href="#" nome="Meus Pedidos" />
              <HeroFooterItem href="#" nome="Lista de Desejos" />
              <HeroFooterItem href="#" nome="Rastrear Pedido" />
              <HeroFooterItem href="#" nome="Ajuda" />
            </ul>
          </div>

          {/* Contato */}
          <div id="contato">
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <HeroFooterItemIcon href="#" icon={<MapPinIcon />} nome="Rua Patoense, 111, Patos-Pb" />
              <HeroFooterItemIcon href="#" icon={<MessageCircleDashedIcon />} nome="(01)92345-6789" />
              <HeroFooterItemIcon href="#" icon={<AtSignIcon />} nome="ustore@email.com.br" />
              <HeroFooterItemIcon href="#" icon={<ClockIcon />} nome="Seg-Sex: 9h-18h" />
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <Divider className="mb-6" />
        <div className="flex flex-col md:flex-row justify-center items-center pt-2">
          <p className="text-white mb-4 md:mb-0">
            © {currentYear} UStore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

