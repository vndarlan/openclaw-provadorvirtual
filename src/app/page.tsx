'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  RotateCcw, 
  Sparkles, 
  Code2, 
  Zap, 
  BarChart3,
  Upload,
  Shirt,
  ShoppingBag,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white">look.me</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucao" className="text-textSecondary hover:text-white transition-colors">Solução</a>
            <a href="#beneficios" className="text-textSecondary hover:text-white transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-textSecondary hover:text-white transition-colors">Como Funciona</a>
            <a href="#integracoes" className="text-textSecondary hover:text-white transition-colors">Integrações</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contato" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-accent rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Agende uma demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#solucao" className="text-textSecondary hover:text-white transition-colors">Solução</a>
              <a href="#beneficios" className="text-textSecondary hover:text-white transition-colors">Benefícios</a>
              <a href="#como-funciona" className="text-textSecondary hover:text-white transition-colors">Como Funciona</a>
              <a href="#integracoes" className="text-textSecondary hover:text-white transition-colors">Integrações</a>
              <a 
                href="#contato" 
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-accent rounded-full text-white font-medium"
              >
                Agende uma demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-textSecondary">Provador Virtual com IA</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">look.me</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-textSecondary mb-4 max-w-2xl mx-auto">
            O provador oficial do seu e-commerce.
          </p>
          
          {/* Description */}
          <p className="text-lg text-textSecondary/70 mb-10 max-w-xl mx-auto">
            Deixe seu cliente experimentar antes de comprar.<br/>
            Aumente conversão. Reduza devolução.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contato"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-accent rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105"
            >
              Agende uma demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#solucao"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-white font-medium hover:bg-surface transition-colors"
            >
              Ver como funciona
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Browser mockup */}
            <div className="rounded-2xl overflow-hidden border border-border bg-surface glow">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surfaceLight border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-4 py-1.5 text-sm text-textSecondary">
                    sualoja.com.br/produto/vestido-elegante
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 bg-gradient-to-br from-surface to-background">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Product */}
                  <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-xl bg-surfaceLight flex items-center justify-center">
                      <Shirt className="w-32 h-32 text-textSecondary/30" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium">Vestido Elegante</p>
                      <p className="text-accent font-bold text-xl">R$ 299,90</p>
                    </div>
                  </div>
                  {/* Try-on Widget */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-background border border-accent/30 glow">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 text-accent mb-2">
                          <Sparkles className="w-5 h-5" />
                          <span className="font-semibold">look.me</span>
                        </div>
                        <p className="text-white text-lg font-medium">Experimente esta peça</p>
                      </div>
                      <div className="aspect-square rounded-xl bg-surfaceLight border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 hover:border-accent/50 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 text-textSecondary" />
                        <p className="text-textSecondary text-sm">Faça upload da sua foto</p>
                      </div>
                      <button className="w-full mt-4 py-3 bg-gradient-accent rounded-lg text-white font-medium flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Experimentar agora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Problem Section
function Problem() {
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            O PROBLEMA
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Seu cliente quer experimentar<br/>
            <span className="text-textSecondary">— mas não pode.</span>
          </motion.h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-surface border border-border"
          >
            <div className="text-5xl md:text-6xl font-bold text-red-400 mb-4">70%</div>
            <p className="text-xl text-white mb-2">dos consumidores abandonam</p>
            <p className="text-textSecondary">o carrinho por dúvida sobre como a peça vai ficar.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-surface border border-border"
          >
            <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-4">30%</div>
            <p className="text-xl text-white mb-2">das compras de moda</p>
            <p className="text-textSecondary">são devolvidas porque não ficaram como o esperado.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Solution Section
function Solution() {
  return (
    <section id="solucao" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            A SOLUÇÃO
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Veja o <span className="gradient-text">look.me</span> em ação
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-textSecondary max-w-2xl mx-auto">
            Seu cliente faz upload de uma foto. Nossa IA mostra como a roupa fica. Ele compra com confiança.
          </motion.p>
        </motion.div>
        
        {/* Demo visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            {/* Step 1 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-2xl bg-surface border border-border flex items-center justify-center mb-4 hover:border-accent/50 transition-colors">
                <div className="text-center p-6">
                  <Upload className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-white font-medium">Foto do cliente</p>
                  <p className="text-textSecondary text-sm mt-2">Upload simples e seguro</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">1</div>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-12 h-12 text-accent" />
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/30 flex items-center justify-center mb-4 glow">
                <div className="text-center p-6">
                  <Sparkles className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-medium">Resultado instantâneo</p>
                  <p className="text-textSecondary text-sm mt-2">IA processa em segundos</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">2</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Benefits Section
function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumente a Conversão',
      description: 'Clientes que experimentam virtualmente têm 2.5x mais chance de comprar.',
      stat: '+40%',
      statLabel: 'em conversão'
    },
    {
      icon: RotateCcw,
      title: 'Reduza Devoluções',
      description: 'Expectativa alinhada com a realidade significa menos trocas e devoluções.',
      stat: '-30%',
      statLabel: 'em devoluções'
    },
    {
      icon: Sparkles,
      title: 'Experiência Premium',
      description: 'Diferencie seu e-commerce com tecnologia de ponta que encanta clientes.',
      stat: '5x',
      statLabel: 'mais engajamento'
    }
  ]
  
  return (
    <section id="beneficios" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            BENEFÍCIOS
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por que escolher o look.me?
          </motion.h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-textSecondary mb-6">{benefit.description}</p>
              <div className="pt-6 border-t border-border">
                <span className="text-4xl font-bold gradient-text">{benefit.stat}</span>
                <p className="text-textSecondary text-sm mt-1">{benefit.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How it Works Section
function HowItWorks() {
  const steps = [
    {
      icon: Code2,
      title: 'Integre',
      description: 'Copie nosso snippet de código ou use nosso plugin. Menos de 10 linhas.'
    },
    {
      icon: Zap,
      title: 'Configure',
      description: 'Conecte seu catálogo de produtos via API. Sincronização automática.'
    },
    {
      icon: BarChart3,
      title: 'Venda mais',
      description: 'Seus clientes experimentam, você acompanha métricas em tempo real.'
    }
  ]
  
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            COMO FUNCIONA
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
            3 passos para transformar<br/>seu e-commerce
          </motion.h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-background border border-accent flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-textSecondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Code snippet preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-textSecondary text-sm ml-2">install.html</span>
            </div>
            <pre className="p-6 bg-background text-sm overflow-x-auto">
              <code className="text-textSecondary">
                <span className="text-purple-400">&lt;script</span> <span className="text-blue-400">src</span>=<span className="text-green-400">"https://cdn.lookme.ai/widget.js"</span><span className="text-purple-400">&gt;&lt;/script&gt;</span>{'\n'}
                <span className="text-purple-400">&lt;script&gt;</span>{'\n'}
                {'  '}<span className="text-blue-400">LookMe</span>.<span className="text-yellow-400">init</span>({'{'}{'\n'}
                {'    '}apiKey: <span className="text-green-400">'sua_api_key'</span>,{'\n'}
                {'    '}storeId: <span className="text-green-400">'sua_loja'</span>{'\n'}
                {'  '}{'}'});{'\n'}
                <span className="text-purple-400">&lt;/script&gt;</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Integrations Section
function Integrations() {
  const integrations = [
    { name: 'Shopify', color: '#96BF48' },
    { name: 'WooCommerce', color: '#96588A' },
    { name: 'VTEX', color: '#F71963' },
    { name: 'Nuvemshop', color: '#2C3E50' },
    { name: 'Magento', color: '#F46F25' },
    { name: 'API Custom', color: '#6366F1' },
  ]
  
  return (
    <section id="integracoes" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            INTEGRAÇÕES
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Funciona com seu e-commerce
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-textSecondary max-w-2xl mx-auto">
            Integração em menos de 10 minutos. Documentação completa. Suporte dedicado.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all text-center group"
            >
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: integration.color }}
              >
                {integration.name[0]}
              </div>
              <p className="text-white font-medium group-hover:text-accent transition-colors">{integration.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar<br/>seu e-commerce?
          </h2>
          <p className="text-xl text-textSecondary mb-10 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja o look.me funcionando na sua loja.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:contato@lookme.ai"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-accent rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105"
            >
              Agende uma demo gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-textSecondary mt-6 text-sm">
            Sem compromisso • Setup em minutos • Suporte em português
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white">look.me</span>
          </div>
          
          <p className="text-textSecondary text-sm">
            © 2026 look.me • O provador oficial do seu e-commerce
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-textSecondary hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-textSecondary hover:text-white transition-colors text-sm">Termos</a>
            <a href="mailto:contato@lookme.ai" className="text-textSecondary hover:text-white transition-colors text-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Integrations />
      <CTA />
      <Footer />
    </main>
  )
}
